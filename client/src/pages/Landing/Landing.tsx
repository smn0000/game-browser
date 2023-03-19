import React from 'react'
import './styles.scss'
import Carousel from '../../components/Carousel/Carousel'
import CarouselMobile from '../../components/Carousel/CarouselMobile'
import { useMediaQuery } from 'usehooks-ts'

const Landing = () => {
  const isMobile:boolean = useMediaQuery('(max-width: 1024px)')

  return (
    <div className='landing'>
      <h1>GAMES</h1>
      <p>Top Games</p>
      <div className='carousel-container'>
        {isMobile ? <CarouselMobile/> :<Carousel/> }
        
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam unde consectetur repellat odit excepturi dolore accusamus et commodi nobis nulla a nihil libero modi ea, nemo quia ab perspiciatis!
      Veniam beatae ratione minus, nobis consequatur vitae. Ipsa optio pariatur voluptatem quas, voluptate saepe nihil soluta repellat doloremque laboriosam veniam illo architecto temporibus. Quaerat odit minus quos perferendis fuga in.
      Nihil dignissimos quam officia cupiditate officiis debitis. Consequatur optio tenetur maiores a, blanditiis eum quisquam suscipit modi veritatis veniam. Aliquid iure animi dignissimos optio at quod impedit fuga distinctio esse!
      Odio praesentium repellendus est, atque ea dolore sed non mollitia voluptatum nemo nihil beatae quas pariatur error aliquid fuga labore incidunt voluptatem cum ut. Provident repellendus impedit dolore. Dolorum, soluta.
      Beatae numquam reiciendis deserunt ipsam, explicabo repellat modi qui eum enim aut! Nesciunt fuga expedita accusamus vero exercitationem, numquam eligendi repudiandae a incidunt ipsa, modi, ducimus pariatur eaque eos fugit?
      Repudiandae sint facilis at. Distinctio quas exercitationem iusto laudantium reprehenderit fuga possimus odit rem fugit hic, vitae atque officia eum! Nam illum, soluta culpa cum itaque rem dolore reiciendis recusandae.
      Natus tempore veniam rerum unde quos voluptatum nesciunt ullam perferendis, modi, saepe provident molestias quod, repellendus ipsum ut consequatur? Expedita earum nihil sunt obcaecati quisquam fugiat unde aut perferendis dolor.
      Error voluptatem ex, iure est minus cumque pariatur doloribus veritatis labore doloremque recusandae nesciunt ipsa quisquam maxime. Voluptatum ab blanditiis velit. Voluptates ipsa sed delectus atque, omnis quo temporibus sequi.
      Tempore, alias? Suscipit molestiae ad tempore praesentium quidem quaerat, accusantium ipsam nemo sequi, totam facilis. Dolores eveniet odit assumenda odio asperiores fuga sint ut libero dolorem, molestias est rem vero.
      Inventore minus nemo in nesciunt praesentium atque accusamus necessitatibus cumque fuga nostrum iste similique, adipisci consequatur sequi quo quisquam quibusdam voluptates officiis provident iure qui animi quia ad cum. Laudantium.
      Voluptatum quia, nisi dolor voluptate nulla culpa in libero suscipit porro vero soluta provident. A, cupiditate. Molestiae veritatis cupiditate suscipit quisquam, reiciendis sequi iste modi voluptates, velit voluptatem enim libero.
      Quidem, nulla possimus aliquid ex fugiat, explicabo ducimus dolore unde vel vitae temporibus placeat esse eveniet omnis alias harum, neque necessitatibus quam a at accusantium inventore sint! Vero, illum omnis!
      Reiciendis excepturi, dolorem, pariatur dolorum distinctio est eveniet qui consequuntur nulla commodi veniam ipsum voluptatem nam quasi id, magni cupiditate optio. Similique, sequi veniam fugiat nostrum fugit dicta dolores quam.
      Rem reprehenderit, ducimus accusantium quas, perferendis nemo iusto aliquid dolor cupiditate maiores consequuntur fugiat saepe debitis adipisci impedit accusamus harum. Deleniti molestiae earum nisi facilis voluptates soluta corrupti expedita et!
      Corporis perspiciatis voluptas facilis eligendi ipsum ea voluptatem, sequi est iusto. Beatae ab perspiciatis eum hic? Doloribus esse natus magnam et eligendi aperiam ipsam distinctio, harum vero! Incidunt, veritatis nisi?
      Consequuntur numquam ducimus explicabo. Autem maxime deserunt odio accusamus ratione dolore fugit, a sequi deleniti! Perspiciatis corrupti facere iusto eum commodi nisi repellendus ipsum! Ipsam temporibus neque expedita a minus.
      Error sed delectus eaque necessitatibus optio commodi, libero repudiandae rem quasi vero. Pariatur corrupti atque accusantium rerum inventore doloremque voluptatum, tempore incidunt magni vero commodi ipsum corporis deleniti recusandae repudiandae.
      Mollitia, nihil autem rem eum pariatur dolorum eaque voluptate tempore totam architecto, illum animi deserunt nostrum vero expedita numquam, cupiditate aliquam ipsa. Provident eius temporibus magnam eligendi assumenda dolor dolores!
      Voluptatibus molestiae similique ipsam aliquam ratione facilis cupiditate. Illum libero, incidunt, voluptatum magnam itaque nihil dicta reprehenderit vero adipisci eaque rerum labore, asperiores ab similique nobis in inventore laborum. Delectus.
      Odio rerum animi corrupti facere. Voluptatem officia eligendi minima suscipit possimus tempora omnis sit? Deserunt exercitationem praesentium, consequatur illum, optio nam sapiente ipsum minima tenetur sequi alias nemo sint libero?</p>
      
    </div>
  )
}

export default Landing