import { PortfolioItem } from '@/components/PortfolioItem'
import { SectionTitle } from '@/components/SectionTitle'
import Image from 'next/image'

export default function Page() {
  return (
    <PortfolioItem
      title="Budget Tracker"
      summary="Designed a feature during a company hackathon to help customers track their spending habits and budget their finances through Capital One."
    >
      <section className="flex flex-col gap-6">
        <SectionTitle title="Objectives" />
        <span>
          I gathered with a group of coworkers at Capital One to participate in an 'Innovation Day'—
          a workday-long hackathon to create a meaningful solution to a need that customers have.
        </span>
        <span>
          Our team decided to focus on the need for customers to{' '}
          <span className="power-underline">
            budget their spending habits without having to leave the app
          </span>
          . Using the data from their previous transactions, while giving them the option to set
          budgets based on this data, would be a useful tool for customers across the board.
        </span>
        <span>We set aside a list of objectives to create an optimal experience:</span>
        <span>
          <ol className="ml-8 list-decimal">
            <li>
              <span className="font-bold">Our feature must be smart</span>: Our team decided that,
              first and foremost, our application needed to grab data from different back-end
              databases in order to create an easy, click-and-go experience for customers. Post-MVP,
              we can imagine that we could utilize push notifications to alert a user when they've
              almost reached their budget for the month in a particular sector (dining, groceries,
              travel, etc).
            </li>
            <li>
              <span className="font-bold">Our feature must be easy to use</span>: With all of the
              informative data that we will be presenting to the customer, we need to make sure the
              data is presented in a way that's easy to digest. This is pretty self-explanatory;
              with the data that we have, we don't want to overwhelm and scare the customer.
            </li>
            <li>
              <span className="font-bold">Our feature must be attractive</span>: This objective
              definitely ties in with the previous two. We wanted the customer to have a great
              experience with Budget Tracker, with eye-catching graphs that also showed important
              data in an intuitive way. Making our application attractive ties all of the pieces of
              the puzzle together.
            </li>
          </ol>
        </span>
      </section>
      <section className="flex flex-col gap-6">
        <SectionTitle title="The Approach" />
        <span className="power-underline">
          After setting our objectives, because of our time constraint, we decided to focus on two
          main portions of our feature that we must complete.
        </span>
        <span className="text-xl font-semibold">
          'Must' 1: We must onboard customers to Budget Tracker in an efficient, seamless way.
        </span>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col justify-center gap-4 md:w-[48%]">
            <div className="relative h-[600px] w-full">
              <Image src="/budget-tracker/1.png" alt="" className="object-contain" fill />
            </div>
            <span className="text-sm italic">
              After a customer enrolls a card, they are shown the Account Setup modal above. We
              decided to add the 'Set Spending Preferences' portion at the bottom.
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 md:w-[48%]">
            <div className="relative h-[600px] w-full">
              <Image src="/budget-tracker/2.png" alt="" className="object-contain" fill />
            </div>
            <span className="text-sm italic">
              After tapping 'Set Spending Preferences', the customer is able to set their budget and
              track different types of transactions.
            </span>
          </div>
        </div>
        <span>
          In order to onboard customers efficiently, we understood that we need to prompt customers
          to sign up for Budget Tracker during setup of their new card. This way, they can set
          different budgets for different cards.
        </span>
        <span>
          When a customer adds a new card to their account, they are shown a modal called Account
          Setup. Here, we added a tab called 'Set Spending Preferences' so that a customer is able
          to create a custom budget. This way, the customer is able to set their preferences right
          after they enroll. They can always come back and set their budget later.
        </span>
        <span>
          With this piece of the feature, we allow the customer to set their own custom budget based
          on their credit limit.{' '}
          <span className="power-underline">
            Our goal was to give the customer as much leeway as possible to tailor their budget to
            their needs.
          </span>
        </span>
        <span>
          After we were happy with how the customer <span className="font-bold">creates</span> their
          budget, we wanted to add a way for customers to <span className="font-bold">track</span>{' '}
          their budget.
        </span>
        <span className="text-xl font-semibold">
          'Must' 2: We must allow customers to track their spending patterns so that they can adjust
          those habits.
        </span>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col justify-center gap-4 md:w-[48%]">
            <div className="relative h-[600px] w-full">
              <Image src="/budget-tracker/3.png" alt="" className="object-contain" fill />
            </div>
            <span className="text-sm italic">
              When the customer views their card transactions, we show them a graph of their
              spending habits based on their current balance. They can click 'Show More' to view the
              screen to the right.
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 md:w-[48%]">
            <div className="relative h-[600px] w-full">
              <Image src="/budget-tracker/key.png" alt="" className="object-contain" fill />
            </div>
            <span className="text-sm italic">
              After clicking on the 'Show More' button, the customer is able to see a detailed
              breakdown of how they've spent based on their budget. At the top, the customer can
              click 'Change Your Spend View' to view their spending habits over different periods of
              time.
            </span>
          </div>
        </div>
        <span>
          When viewing their spending habits, we knew that we needed to create an intuitive,
          engaging tool to allow customers to track and change their budget on the fly.
        </span>
        <span>
          We decided to add our main component on the same page as the customer's transactions. We
          knew that if a customer is interested in viewing their card's transactions, they would
          also be interested in seeing patterns in those transactions. This way, the customer is
          able to view, track, and manage their finances all within one place.{' '}
        </span>
        <span className="text-xl font-bold">
          ✨ View a prototype of this experience{' '}
          <a href="https://projects.invisionapp.com/share/DJ104OCMSW2A#/screens/444153411_ASU">
            here
          </a>
          !
        </span>
      </section>
      <section className="flex flex-col gap-6">
        <SectionTitle title="Outcomes" />
        <span>
          Being a developer-transitioned-designer, I understand the gap between "I want this cool
          feature" and "this cool feature is feasible".{' '}
          <span className="power-underline">
            Bridging that gap between development and design is key to creating (both!) a cool,
            feasible feature.
          </span>
        </span>
        <span>
          During the brainstorming phase, I opened up Figma to start visualizing their ideas. This
          allowed us to parse through what ideas were cool, what ideas were feasible, and ideas that
          were both cool and feasible. With this gap bridged, were able to create an intuitive,
          data-driven experience while limiting unnecessary click-throughs and confusing
          information.
        </span>
        <span>
          Working as a developer has allowed me to feel out the small details of a feature, and
          working as a designer has helped me retain the bigger picture and keep asking "why?". Over
          the few hours that we worked on Budget Tracker,{' '}
          <span className="power-underline">
            I was able to exercise both of those abilities while still keeping others' ideas in
            mind.
          </span>
        </span>
        <span>
          Ultimately, because of our time constraints, Budget Tracker did not make it past the
          mocking phase. Either way, I'm very fortunate to have worked with so many bright minds on
          a feature that would knock it out of the park if we were given more time!
        </span>
      </section>
    </PortfolioItem>
  )
}
