import { Callout } from '@/components/ui/Callout'
import { Section } from '@/components/ui/Section'
import { CalloutCard } from '@/components/ui/CalloutCard'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <Section type="portfolio">
        <p>
          At CaryHealth, we have a product called{' '}
          <a href="https://askclair.ai/" target="_blank" rel="noopener noreferrer">
            Clair
          </a>{' '}
          that harnesses clinical AI. Clair's mission is to make intelligently sourced clinical data
          accessible to the general public and easy to retrieve without digging for answers.
        </p>
        <p>
          The user experience is simple -- ask a question and receive a search result. This search
          result itself is divided into three sections: an answer, a more in-depth summary of the
          references used in the search result, and of course, the references themselves. This way,
          the user can take as little or as much as they want, catering to both professionals and
          non-professionals (like students or parents).
        </p>
        <Callout
          header="With the launch of Clair a few months prior to this effort, we were bullish about
            tightening the user experience to patch any interface hiccups or roadblocks."
        />
        <p>
          We also wanted to add more areas of motivation for the user to sign up for a free account
          (beyond the current benefit of unlimited queries). This way, we could put ourselves in a
          better position for marketing and sales initiatives in the future.
        </p>
      </Section>
      <Section title="The Problem" type="portfolio">
        <p>
          There were a few drawbacks of our original search result UI that we had been mulling over
          for a couple of months:
        </p>

        <Callout
          header="Major Layout Shift"
          description="Our API doesn't come back
                with a search result immediately — as to be expected! Within our original design,
                though, we didn't capture well enough the different UI states that come with
                multiple levels of loading."
          type="list"
          listNumber="01"
        />
        <Callout
          header="A Lack of Signup Incentive"
          description="To drive outcomes, we
                needed to add more free-tier perks as well as market them to unauthenticated users."
          type="list"
          listNumber="02"
        />
        <Callout
          header="Vertical & Horizontal Exhaustion"
          description="There are two
                things a user hates: having to scroll too much and having to read across a large
                horizontal space such as a desktop screen. Unfortunately, both of these issues were
                prevalent in our original design."
          type="list"
          listNumber="03"
        />
        <Image
          src="/clair-search-results/old-clair.png"
          className="w-full rounded-xl"
          alt="The old Clair search results experience, showing long lines of text spanning across a wide screen and sections that pop into existence without loading indicators."
          width={2481}
          height={2336}
          sizes="100vw"
        />
        <span className="caption">
          Our old search results experience. Notice the long lines of text that users would have to
          read across large screens. Loading was also a disjointed experience-sections would pop
          into existence without any indication.
        </span>
      </Section>
      <Section title="Approach" type="portfolio">
        <p>
          With these problems in mind, I worked with my designer to get some solutions set up in
          Figma.{' '}
          <span className="power-underline">
            While my designer tackled problem #3 on our list, I focused on the other two objectives
            of minimizing layout shift and creating motivation around free plan signup.
          </span>
        </p>
        <Callout header="Tackling Problems: 'A Lack of Signup Incentive' & 'Vertical & Horizontal Exhaustion'" />
        <p>To start out, I tacked down some potential ideas for us to incentivize signup:</p>
        <Image
          src="/clair-search-results/ideation-board.png"
          className="rounded-xl"
          alt="Ideation board showing multiple design concepts for incentivizing user signup on Clair."
          width={3040}
          height={2464}
          sizes="100vw"
        />
        <p>
          Our main objective here was to pick some low-hanging fruit: efforts that would be easy to
          implement with a sizeable user impact.{' '}
          <span className="power-underline">
            With our long-standing objective of keeping Clair user-friendly for both professionals
            and non-professionals, we focused on efforts that would benefit both of these user
            groups.
          </span>{' '}
          After a conversation with leadership, we picked two efforts from the bunch:
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Callout
            header="Tooltip Keywords"
            description="When authenticated users search,
            the result will populate highlighted words that, when hovered over, provide tooltips
            with definitions. This way, users can exit their Google tab and stay on Clair for any necessary
                definitions."
            type="list"
            listNumber="01"
          />
          <Callout
            header="Follow-Up Questions"
            description="When authenticated users search,
            a few follow-up questions appear that add depth to the user's search. Upon clicking one
            of these follow-up questions, a new tab will populate its search result. Both professionals and non-professionals can utilize this feature to dig deep into a
                topic. This is helpful when the user isn't 100% sure what to search for when they
                query Clair."
            type="list"
            listNumber="02"
          />
        </div>
        <p>
          After our designer finished up her revamp of the search result layout, I got to work
          designing for the above two efforts.
        </p>
        <p>All in all, we landed on the below design:</p>
        <Image
          src="/clair-search-results/new-clair.png"
          className="w-full"
          alt="The redesigned Clair search results layout featuring a sidebar navigation, tooltip keywords, and follow-up questions."
          width={2481}
          height={2955}
          sizes="100vw"
        />
        <span className="caption">
          The new layout from our designer (Solution to #3, "Vertical & Horizontal Exhaustion") with
          my follow-up questions and tooltip keyword initiatives added to the mix.
        </span>
        <p>
          The Problem "Vertical & Horizontal Exhaustion" was a tricky one. In order to decrease on
          horizontal reading fatigue, more vertical space would be needed. Our solution was to add a
          functional sidebar with a menu to the right side of the screen. When the user clicks on a
          button from this menu, they are automatically scrolled down to the corresponding section;
          this not only shows the user that these sections exist, but also gives them a quick
          navigation tool to use.
        </p>
        <p>Above, you can also see the Tooltip Keywords and Follow-Up questions in action.</p>
        <div className="flex justify-center gap-3">
          <Image
            src="/clair-search-results/new-clair-unauth-form.png"
            className="flex w-2/3"
            alt="Unauthenticated Clair search result showing a signup prompt with query limit messaging."
            width={1644}
            height={1546}
            sizes="66vw"
          />
          <Image
            src="/clair-search-results/new-clair-unauth-sidebar.png"
            className="flex w-1/3"
            alt="Unauthenticated Clair sidebar showing signup incentives for free-tier users."
            width={785}
            height={1542}
            sizes="33vw"
          />
        </div>
        <span className="caption">
          The images on the right and left encapsulate the unauthenticated user's experience. On the
          right, incentives for signup were added (Solution to #2, "A Lack of Signup Incentive") to
          our current query limit on the left.
        </span>
        <Callout header="Tackling Problem: 'Major Layout Shift'" />
        <p>
          With the solutions to issues #2 and #3 designed and approved, all that was left was to
          tackle issue #1: the layout shift apparent with multiple API requests. To add to the
          madness, these requests were sometimes chained and all with different loading speeds.
        </p>
        <p>
          <span className="power-underline">
            We needed to give users a visual indication that information will flow in, just not yet.
          </span>
          This was not only apparent within the search result itself, but also in the sidebar in the
          image above. Loading skeletons fit the bill perfectly for the smaller pieces of data on
          the sidebar — there's a lot of data over there, and utilizing these placeholders kept data
          from popping out of nowhere. Spinners for the larger sections were chosen to give the user
          a more sophisticated visual of exactly what section was loading in.
        </p>
        <p>See the below video for a visual of how I tackled our layout shift issue.</p>
      </Section>
      <Section title="Outcomes" type="portfolio">
        <p>
          Upon design approval, I updated the UI and hooked up new APIs for our tooltip keywords and
          follow-up questions. This initiative took three weeks total: two weeks to design and one
          week to develop.
        </p>
        <div className="portfolio-image relative p-[33%]">
          <iframe
            src="https://player.vimeo.com/video/1068973155?h=2262c53451&badge=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="absolute left-0 top-0 h-full w-full"
            title="Bridget Larcher | Clair Search Results Revamp"
          ></iframe>
        </div>
        <p>
          The above video shows and authenticated user's experience. When asking a question, the
          page populates sequentially, utilizing skeletons and spinners to cater to the amount of
          data loading in. At the same time, follow-up questions and keywords begin to populate,
          allowing the user a one-stop shop for the information they need.
        </p>
        <p>
          This was the first effort at CaryHealth I took from concept to production myself: my
          proposal, my designs for the signup and loading experiences, and every line of the
          front-end code. This fact made conversations more streamlined and tasks more efficient,
          and as a result, we were able to ship far more quickly.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <CalloutCard stat="+34%" label="Free plan signups over the next two months" />
          <CalloutCard stat="−10%" label="Drop-off from the search result page" />
        </div>
        <Callout
          header="
          Our overhaul of the search results section was a major success; free plan signup increased
          34% over the next two months and drop off from the search result page decreased about 10%.
          This meant that those who visited stayed."
        />
        <p>
          I'm very thankful for the chance to work on this initiative — Clair is an awesome tool
          that I use in my daily life (WebMD, who?), and owning a piece of it end to end is the kind
          of work I want more of.
        </p>
        <p>
          Check out Clair{' '}
          <a href="https://askclair.ai/" target="_blank" rel="noopener noreferrer">
            here
          </a>
          !
        </p>
      </Section>
    </>
  )
}
