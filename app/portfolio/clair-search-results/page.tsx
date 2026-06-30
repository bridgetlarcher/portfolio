import { PortfolioItem } from '@/components/PortfolioItem'
import { SectionHeader } from '@/components/SectionHeader'

export default function Page() {
  return (
    <PortfolioItem>
      <section className="portfolio-section">
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
        <p>
          <span className="power-underline">
            With the launch of Clair a few months prior to this effort, we were bullish about
            tightening the user experience to patch any interface hiccups or roadblocks.
          </span>{' '}
          We also wanted to add more areas of motivation for the user to sign up for a free account
          (beyond the current benefit of unlimited queries). This way, we could put ourselves in a
          better position for marketing and sales initiatives in the future.
        </p>
      </section>
      <SectionHeader text="The Problem" />
      <section className="portfolio-section">
        <p>
          There were a few drawbacks of our original search result UI that we had been mulling over
          for a couple of months:
        </p>

        <div className="portfolio-image flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="flex flex-col gap-6 md:w-1/2 2xl:w-1/3">
            <ul className="ml-8 list-decimal">
              <li>
                <span className="font-bold">Major Layout Shift</span>: Our API doesn't come back
                with a search result immediately — as to be expected! Within our original design,
                though, we didn't capture well enough the different UI states that come with
                multiple levels of loading.
              </li>
              <li>
                <span className="font-bold">A Lack of Signup Incentive</span>: To drive outcomes,
                we needed to add more free-tier perks as well as market them to unauthenticated
                users.
              </li>
              <li>
                <span className="font-bold">Vertical & Horizontal Exhaustion</span>: There are two
                things a user hates: having to scroll too much and having to read across a large
                horizontal space such as a desktop screen. Unfortunately, both of these issues
                were prevalent in our original design.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:w-1/2 2xl:w-2/3">
            <img
              src="/clair-search-results/old-clair.png"
              className="w-full rounded-xl"
              alt="The old Clair search results experience, showing long lines of text spanning across a wide screen and sections that pop into existence without loading indicators."
            />
            <span className="caption">
              Our old search results experience. Notice the long lines of text that users would have
              to read across large screens. Loading was also a disjointed experience-sections would
              pop into existence without any indication.
            </span>
          </div>
        </div>
      </section>
      <SectionHeader text="Approach" />
      <section className="portfolio-section">
        <p>
          With these problems in mind, I worked with my designer to get some solutions set up in
          Figma.{' '}
          <span className="power-underline">
            While my designer tackled problem #3 on our list, I focused on the other two objectives
            of minimizing layout shift and creating motivation around free plan signup.
          </span>
        </p>
        <h3 className="text-xl font-semibold">
          Tackling Problems: 'A Lack of Signup Incentive' & 'Vertical & Horizontal Exhaustion'
        </h3>
        <p>To start out, I tacked down some potential ideas for us to incentivize signup:</p>
        <img
          src="/clair-search-results/ideation-board.png"
          className="rounded-xl"
          alt="Ideation board showing multiple design concepts for incentivizing user signup on Clair."
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
        <ul className="ml-8 list-decimal">
          <li>
            <span className="font-bold">Tooltip Keywords</span>: When authenticated users search,
            the result will populate highlighted words that, when hovered over, provide tooltips
            with definitions.
            <ul className="ml-8 list-disc">
              <li>
                This way, users can exit their Google tab and stay on Clair for any necessary
                definitions.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Follow-Up Questions</span>: When authenticated users
            search, a few follow-up questions appear that add depth to the user's search. Upon
            clicking one of these follow-up questions, a new tab will populate its search result.
            <ul className="ml-8 list-disc">
              <li>
                Both professionals and non-professionals can utilize this feature to dig deep into
                a topic. This is helpful when the user isn't 100% sure what to search for when
                they query Clair.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          After our designer finished up her revamp of the search result layout, I got to work
          designing for the above two efforts.
        </p>
        <p>All in all, we landed on the below design:</p>

        <img
          src="/clair-search-results/new-clair.png"
          className="w-full"
          alt="The redesigned Clair search results layout featuring a sidebar navigation, tooltip keywords, and follow-up questions."
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
          <img
            src="/clair-search-results/new-clair-unauth-form.png"
            className="flex w-2/3"
            alt="Unauthenticated Clair search result showing a signup prompt with query limit messaging."
          />
          <img
            src="/clair-search-results/new-clair-unauth-sidebar.png"
            className="flex w-1/3"
            alt="Unauthenticated Clair sidebar showing signup incentives for free-tier users."
          />
        </div>
        <span className="caption">
          The images on the right and left encapsulate the unauthenticated user's experience. On the
          right, incentives for signup were added (Solution to #2, "A Lack of Signup Incentive") to
          our current query limit on the left.
        </span>

        <h3 className="text-xl font-semibold">Tackling Problem: 'Major Layout Shift'</h3>
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
      </section>
      <SectionHeader text="Outcomes" />
      <section className="portfolio-section">
        <p>
          Upon design approval, I updated the UI and hooked up new APIs for our tooltip keywords and
          follow-up questions. This initiative took three weeks total: two weeks to design and one
          week to develop.
        </p>
        <div className="portfolio-image relative p-[33%]">
          <iframe
            src="https://player.vimeo.com/video/1068973155?h=2262c53451&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="absolute left-0 top-0 h-full w-full"
            title="Bridget Larcher | Clair Search Results Revamp"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js" async></script>
        <p>
          The above video shows and authenticated user's experience. When asking a question, the
          page populates sequentially, utilizing skeletons and spinners to cater to the amount of
          data loading in. At the same time, follow-up questions and keywords begin to populate,
          allowing the user a one-stop shop for the information they need.
        </p>
        <p>
          This was the first effort at CaryHealth I owned end to end: concept to design to
          development to production, entirely on my own. This fact made conversations more
          streamlined and tasks more efficient, and as a result, we were able to ship far more
          quickly.
        </p>
        <p className="power-underline">
          Our overhaul of the search results section was a major success; free plan signup increased
          34% over the next two months and drop off from the search result page decreased about 10%.
          This meant that those who visited stayed.
        </p>
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
      </section>
    </PortfolioItem>
  )
}
