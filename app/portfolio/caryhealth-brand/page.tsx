import { PortfolioItem } from '@/components/PortfolioItem'
import { SectionTitle } from '@/components/SectionTitle'
import Image from 'next/image'

export default function Page() {
  return (
    <PortfolioItem
      title="CaryHealth Brand Identity"
      summary="Lead the direction of design and development of CaryHealth's brand identity, including its own brand site, logos, and marketing materials."
    >
      <section className="flex flex-col gap-6">
        <span>
          (Want a sneak peek of the final brand site? I get it! You can check it out{' '}
          <a href="https://www.cary.health/" target="_blank">
            here
          </a>{' '}
          😉)
        </span>
        <SectionTitle title="Objectives" />
        <span>
          A central goal for CaryHealth’s 2025 year could be summed up by one word: sales.{' '}
          <span className="power-underline">
            In late 2024, we found ourselves in a spot where our products were looking and feeling
            great, but our brand presence was heavily lacking.
          </span>{' '}
          Noticing this, we decided to pull together an in-house marketing team to focus on how to
          best market our products.
        </span>
        <span>
          This initiative included hiring a marketing designer and Webflow developer, both of which
          I helped vet from a user experience fit perspective. In the interim of hiring a manager to
          lead the team, I took the initiative to dive into the world of marketing, a realm in which
          I had little prior experience!
        </span>
        <span>
          Our problem was this:{' '}
          <span className="power-underline">
            Though we already had a brand site, it was lacking in some crucial aspects.
          </span>{' '}
          The site leaned heavily on AI imagery, which failed to showcase the nuances and use cases
          of our products as well as we wanted. Even beyond the imagery, the look and feel of the
          site didn't hit the nail on the head: it felt cold, rigid, and unwelcoming. It was as if
          we were showcasing a shell of a site rather than a company with innovative healthcare
          solutions.
        </span>
        <span>
          As a result of these problems, we set aside our main objectives for the three months we
          had before 2025:
        </span>
        <span>
          <ol className="ml-8 list-decimal">
            <li>
              <span className="font-bold">A brand identity</span>: First and foremost, we needed to
              tack down a distinctive way for us to present ourselves. Are we happy? Serious?
              Playful? Is our brand loud and colorful, or thoughtful and deliberate? Once we found
              our footing here, the transition into #2 and #3 would be seamless.
            </li>
            <li>
              <span className="font-bold">A brand site facelift</span>: Without a clear identity, we
              found our current site to be a mix of text and imagery that didn't fit the bill. Once
              we found our brand's niche, we needed to upgrade the site to reflect the colors,
              descriptive words, and feeling of those newfound brand guidelines. (See below for a
              sneak peek of “before” and “after” photos!)
            </li>
            <li>
              <span className="font-bold">A shiny logo suite</span>: There are currently five
              products the company has built out so far, some of which had mismatching logos and
              others with no logos at all. Our goal was to align our products in such a way that
              followed our brand guidelines while allowing each of them a bit of breathing room to
              showcase their own unique flare. This was to be the metaphorical cherry on top of the
              brand suite cupcake.
            </li>
          </ol>
        </span>
        <span>
          With these three objectives in mind and only three months to accomplish such tasks, we
          wasted no time in finding the right approach.
        </span>
      </section>
      <section className="flex flex-col gap-6">
        <SectionTitle title="The Approach" />
        <span>
          Our marketing designer and I approached our brand identity issue first with an abundance
          of research. In order to find the fastest route to success, we searched through Dribbble
          and Webflow’s templates section to compile a mood board that seamlessly combined the
          identities of all of our products into one space.
        </span>
        <div className="relative h-[400px] w-full">
          <Image src="/caryhealth-brand/mood-board.jpg" alt="" className="object-contain" fill />
        </div>
        <span>
          We ended up finding a few descriptive words that fit our current suite of products well:
        </span>
        <span>
          <ul className="ml-8 list-decimal">
            <li>
              <span className="font-bold">"Playful"</span>, alluding to rounded corners and fun
              colors spanning our products.
            </li>
            <li>
              <span className="font-bold">"Clean"</span>, alluding to the sharp use of whites, and
              grays in combination with those "playful" colors.
            </li>
            <li>
              <span className="font-bold">"Technical"</span>, alluding to the distinctive air of
              professionalism that a healthcare company should have.
            </li>
          </ul>
        </span>
        <span>
          Using these three words, we designed a proof of concept—the main hero section of the
          homepage—to see if we hit the nail on the head or missed the mark.
        </span>
        <span>
          At the same time, we took our three keywords and played with a few ideas for our logo
          suite. We settled upon a logo for our first product, Clair, and it was a hit! The suite
          fell into place seamlessly afterward—each of our products has a distinctive look, feel,
          and use case to them, so we inherently had all we needed to be successful.
        </span>
        <div className="relative h-[400px] w-full">
          <Image
            src="/caryhealth-brand/hero-iteration1.png"
            alt=""
            className="object-contain"
            fill
          />
        </div>
        <span className="caption">
          Our first iteration of a homepage hero with our new logo suite in place.
        </span>
        <span>
          After a few tweaks, we decided to shift this first hero design down the page in favor of a
          less eye-intensive graphic flow. Though this was the case, we did find ourselves
          successful in another aspect: the techy feel of the flowchart-esque design in tandem with
          the rounded corners and distinctive colors of our products peeking through gave us an idea
          of how “playful”, “clean”, and “technical” could work together amicably. This was our way
          forward!
        </span>
        <span>
          For the first iteration of our new brand site, we decided to focus the most attention on
          our homepage and product pages. The most time and effort went into each of these pages,
          and rightfully so;{' '}
          <span className="power-underline">
            it was a challenging, yet fun task to tie together each of our products’ distinctive
            looks and feels in a way that didn’t feel disjointed with the rest of the site.
          </span>
        </span>
        <span>
          Come January was our first shipment of our new brand site, and we couldn’t be more
          pleased!
        </span>
      </section>
      <section className="flex flex-col gap-6">
        <SectionTitle title="Outcomes" />
        <span>
          Our brand identity exercise opened up doors for us that previously seemed impossible to
          crack. With the creation of our logo suite and brand site revamp, we have the context we
          need to showcase our products the way they deserve to be shown.
        </span>
        <div className="relative h-[300px] w-full">
          <Image src="/caryhealth-brand/logo-suite.png" alt="" className="object-contain" fill />
        </div>
        <span>
          Our logo suite combines the unity we so desired from our brand identity with the unique
          feel that each of our products harnesses. We were lucky in that each product has its own
          unique color scheme; this allowed us to utilize these colors to add to the "playful" theme
          we agreed upon!
        </span>
        <div className="relative h-[800px] w-full">
          <Image src="/caryhealth-brand/before-after.png" alt="" className="object-contain" fill />
        </div>
        <span>
          Above, you can see before and after screenshots of the hero sections of our homepage (top)
          and a few of our product pages (bottom).
        </span>
        <span>
          It’s a bit selfish, but I purposefully kept this image a bit on the small side—I think
          that it’s an interesting exercise to compare the before and after from far away. On the
          left, not much can be gathered from the generic imagery used other than the fact that the
          user is looking at a healthcare company’s website. On the right, though, especially on our
          product pages, you get a small taste of what we’re about.
        </span>
        <span>
          <span className="power-underline">
            Within a few months since launch, we’ve really been able to run with our brand identity.
            We’ve created sales decks for our products, one-pagers, social media graphics, trade
            show backdrops, and even merch!
          </span>{' '}
          This was all because we set ourselves up for success early, building a solid foundation
          before jumping to conclusions that wouldn’t fit our brand.
        </span>
        <span>
          I thoroughly enjoyed this exercise in bringing five very different products together to
          form one brand identity.{' '}
          <span className="power-underline">
            How a company presents itself externally can easily make or break not only how it’s
            viewed by others, but also (and sometimes more importantly!) how it sells.
          </span>{' '}
          Seeing CaryHealth flourish because of our brand exercise has opened my eyes to how a
          company can shine with a little bit of design and development!
        </span>
        <span>
          And of course, the grand reveal! You can check it out CaryHealth's brand site{' '}
          <a href="https://www.cary.health/" target="_blank">
            here
          </a>
          !
        </span>
      </section>
    </PortfolioItem>
  )
}
