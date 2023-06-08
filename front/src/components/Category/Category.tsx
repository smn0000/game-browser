import { category, cardData } from "../../types"
import { useState, useEffect } from "react"
import { BiChevronsDown } from "react-icons/bi"
import { motion, AnimatePresence, animate } from "framer-motion"
import Card from "../Card/Card"
import "./styles.scss"

const Category = ({ name }: { name: category }) => {
  const [data, setData] = useState<cardData[]>([])
  const [showAll, setShowAll] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`/api/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [])

  const animateArrow = {
    initial: { rotateX: 0 },
    animate: (showAll: boolean) =>
      showAll ? { rotateX: 180 } : { rotateX: 0 },
  }

  return (
    <div className="category">
      <p className="category__name" id={`${name}`}>
        {name}
      </p>
      {isLoading && (
        <>
          <div className="category__loading">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </>
      )}
      {data && (
        <>
          <AnimatePresence>
            {!showAll ? (
              <motion.div
                key={1}
                className="category__items"
                initial={{ height: "100vh" }}
                animate={{ height: 360 }}
                transition={{ duration: 0.1 }}
              >
                {data.slice(0, 6).map((el) => (
                  <Card data={el} key={el.id} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={2}
                className="category__items"
                initial={{ height: 360 }}
                animate={{ height: "auto" }}
              >
                {data.map((el) => (
                  <Card data={el} key={el.id} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="category__more">
            <motion.a
              href={`#${name}`}
              onClick={(e) => {
                setShowAll((current) => !current),
                  !showAll && e.preventDefault()
              }}
              variants={animateArrow}
              custom={showAll}
              initial="initial"
              animate="animate"
            >
              <BiChevronsDown size={"50px"} />
            </motion.a>
          </div>
        </>
      )}
    </div>
  )
}

export default Category
