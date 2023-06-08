import { useState, useReducer } from "react"
import "./styles.scss"
import { BiCaretLeft, BiCaretRight } from "react-icons/bi"
import { motion, AnimatePresence } from "framer-motion"
import Gameinfo from "../Gameinfo/Gameinfo"
import { cardData } from "../../types"
import { useMediaQuery } from "usehooks-ts"

const Carousel = ({ data }: { data: cardData[] }) => {
  const usePrev = (state: any) => {
    const [tuple, setTuple] = useState([null, state])

    tuple[1] !== state && setTuple([tuple[1], state])

    return tuple[0]
  }

  const reducer = (state: number, action: any) => {
    switch (action.type) {
      case "PREVIOUS":
        return state === 1 ? data.length : state - 1
      case "NEXT":
        return state === data.length ? 1 : state + 1
      case "GOTO":
        return action.payload
      default:
        throw Error("Unknown action.")
    }
  }

  const [selected, dispatch] = useReducer(reducer, 1)
  const [count, setCount] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const prev: any = usePrev(count)
  const isMobile: boolean = useMediaQuery("(max-width: 1024px)")

  let direction: number = prev < count ? 1 : -1

  const card = data.filter((el) => el.id === selected)[0]

  const cardAnimation = {
    initial: (direction: number) => ({ x: direction === 1 ? "100%" : "-100%" }),
    animate: { x: 0 },
    exit: (direction: number) => ({ x: direction === 1 ? "-100%" : "100%" }),
  }

  const handlePan = (offset: number) => {
    if (!isMobile) return

    if (offset < 0) {
      dispatch({ type: "NEXT" })
      setCount((previous) => previous + 1)
    } else {
      dispatch({ type: "PREVIOUS" })
      setCount((previous) => previous - 1)
    }
  }

  const handleShowMore = () => {
    setShowMore(true)
  }
  return (
    <>
      <AnimatePresence>
        {showMore && (
          <Gameinfo data={card} onClose={() => setShowMore(false)} />
        )}
      </AnimatePresence>

      <div className="carousel">
        <button
          className="sidebar"
          onClick={() => {
            dispatch({ type: "PREVIOUS" })
            setCount((previous) => previous - 1)
          }}
        >
          <BiCaretLeft />
        </button>
        <div className="carousel__card">
          <AnimatePresence custom={direction}>
            <motion.img
              className="item"
              src={card.background_image}
              loading="lazy"
              key={count}
              onClick={handleShowMore}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={cardAnimation}
              custom={direction}
              transition={{ duration: 0.5 }}
              onPanEnd={(event, info) =>
                Math.abs(Number(info.offset.x)) > 50 && handlePan(info.offset.x)
              }
            ></motion.img>
          </AnimatePresence>
        </div>

        <div className="dots">
          {data.map((el) =>
            el.id === card.id ? (
              <motion.button
                className="dot"
                key={el.id}
                initial={{ scale: 1 }}
                animate={{ scale: 1.5 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  card.id !== el.id &&
                    dispatch({ type: "GOTO", payload: el.id })
                  card.id !== el.id &&
                    setCount(
                      el.id > card.id
                        ? (previous) => previous + 1
                        : (previous) => previous - 1
                    )
                }}
              ></motion.button>
            ) : (
              <motion.button
                className="dot"
                key={el.id}
                initial={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  card.id !== el.id &&
                    dispatch({ type: "GOTO", payload: el.id })
                  card.id !== el.id &&
                    setCount(
                      el.id > card.id
                        ? (previous) => previous + 1
                        : (previous) => previous - 1
                    )
                }}
              ></motion.button>
            )
          )}
        </div>

        <button
          className="sidebar"
          onClick={() => {
            dispatch({ type: "NEXT" })
            setCount((previous) => previous + 1)
          }}
        >
          <BiCaretRight />
        </button>
      </div>
    </>
  )
}

export default Carousel
