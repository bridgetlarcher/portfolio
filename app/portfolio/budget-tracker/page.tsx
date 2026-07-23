import { SectionHeader } from '@/components/SectionHeader'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <SectionHeader text="Objectives" />
      <section className="portfolio-section">
        <p>
          I gathered with a group of coworkers at Capital One to participate in an 'Innovation Day'—
          a workday-long hackathon to create a meaningful solution to a need that customers have.
        </p>
        <p>
          Our team decided to focus on the need for customers to{' '}
          <span className="font-bold">
            budget their spending habits without having to leave the app
          </span>
          . Using the data from their previous transactions, while giving them the option to set
          budgets based on this data, would be a useful tool for customers across the board.
        </p>
        <p>We set aside a list of objectives to create an optimal experience:</p>
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
            data is presented in a way that's easy to digest. This is pretty self-explanatory; with
            the data that we have, we don't want to overwhelm and scare the customer.
          </li>
          <li>
            <span className="font-bold">Our feature must be attractive</span>: This objective
            definitely ties in with the previous two. We wanted the customer to have a great
            experience with Budget Tracker, with eye-catching graphs that also showed important data
            in an intuitive way. Making our application attractive ties all of the pieces of the
            puzzle together.
          </li>
        </ol>
      </section>
      <SectionHeader text="The Approach" />
      <section className="portfolio-section">
        <p className="font-bold">
          After setting our objectives, because of our time constraint, we decided to focus on two
          main portions of our feature that we must complete.
        </p>
        <h3 className="text-xl font-semibold">
          'Must' 1: We must onboard customers to Budget Tracker in an efficient, seamless way.
        </h3>
        <div className="portfolio-section md:flex-row">
          <div className="flex flex-col justify-center gap-4 md:w-[48%]">
            <Image
              src="/budget-tracker/1.png"
              alt="Account Setup modal with a 'Set Spending Preferences' section added at the bottom."
              width={422}
              height={813}
              sizes="(min-width: 768px) 48vw, 100vw"
            />
            <span className="caption">
              After a customer enrolls a card, they are shown the Account Setup modal above. We
              decided to add the 'Set Spending Preferences' portion at the bottom.
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 md:w-[48%]">
            <Image
              src="/budget-tracker/2.png"
              alt="Budget preferences screen where customers can set spending budgets by category."
              width={422}
              height={813}
              sizes="(min-width: 768px) 48vw, 100vw"
            />
            <span className="caption">
              After tapping 'Set Spending Preferences', the customer is able to set their budget and
              track different types of transactions.
            </span>
          </div>
        </div>
        <p>
          In order to onboard customers efficiently, we understood that we need to prompt customers
          to sign up for Budget Tracker during setup of their new card. This way, they can set
          different budgets for different cards.
        </p>
        <p>
          When a customer adds a new card to their account, they are shown a modal called Account
          Setup. Here, we added a tab called 'Set Spending Preferences' so that a customer is able
          to create a custom budget. This way, the customer is able to set their preferences right
          after they enroll. They can always come back and set their budget later.
        </p>
        <p>
          With this piece of the feature, we allow the customer to set their own custom budget based
          on their credit limit.{' '}
          <span className="font-bold">
            Our goal was to give the customer as much leeway as possible to tailor their budget to
            their needs.
          </span>
        </p>
        <p>
          After we were happy with how the customer <span className="font-bold">creates</span> their
          budget, we wanted to add a way for customers to <span className="font-bold">track</span>{' '}
          their budget.
        </p>
        <h3 className="text-xl font-semibold">
          'Must' 2: We must allow customers to track their spending patterns so that they can adjust
          those habits.
        </h3>
        <div className="portfolio-section md:flex-row">
          <div className="flex flex-col justify-center gap-4 md:w-[48%]">
            <Image
              src="/budget-tracker/3.png"
              alt="Card transactions view showing a spending habits graph with a 'Show More' button."
              width={375}
              height={1142}
              sizes="(min-width: 768px) 48vw, 100vw"
            />
            <span className="caption">
              When the customer views their card transactions, we show them a graph of their
              spending habits based on their current balance. They can click 'Show More' to view the
              screen to the right.
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 md:w-[48%]">
            <Image
              src="/budget-tracker/key.png"
              alt="Detailed spending breakdown screen showing budget categories and a 'Change Your Spend View' toggle."
              width={580}
              height={1766}
              sizes="(min-width: 768px) 48vw, 100vw"
            />
            <span className="caption">
              After clicking on the 'Show More' button, the customer is able to see a detailed
              breakdown of how they've spent based on their budget. At the top, the customer can
              click 'Change Your Spend View' to view their spending habits over different periods of
              time.
            </span>
          </div>
        </div>
        <p>
          When viewing their spending habits, we knew that we needed to create an intuitive,
          engaging tool to allow customers to track and change their budget on the fly.
        </p>
        <p>
          We decided to add our main component on the same page as the customer's transactions. We
          knew that if a customer is interested in viewing their card's transactions, they would
          also be interested in seeing patterns in those transactions. This way, the customer is
          able to view, track, and manage their finances all within one place.{' '}
        </p>
      </section>
      <SectionHeader text="Outcomes" />
      <section className="portfolio-section">
        <p>
          Being a developer-transitioned-designer, I understand the gap between "I want this cool
          feature" and "this cool feature is feasible".{' '}
          <span className="font-bold">
            Bridging that gap between development and design is key to creating (both!) a cool,
            feasible feature.
          </span>
        </p>
        <p>
          During the brainstorming phase, I opened up Figma to start visualizing their ideas. This
          allowed us to parse through what ideas were cool, what ideas were feasible, and ideas that
          were both cool and feasible. With this gap bridged, were able to create an intuitive,
          data-driven experience while limiting unnecessary click-throughs and confusing
          information.
        </p>
        <p>
          Working as a developer has allowed me to feel out the small details of a feature, and
          working as a designer has helped me retain the bigger picture and keep asking "why?". Over
          the few hours that we worked on Budget Tracker,{' '}
          <span className="font-bold">
            I was able to exercise both of those abilities while still keeping others' ideas in
            mind.
          </span>
        </p>
        <p>
          Ultimately, because of our time constraints, Budget Tracker did not make it past the
          mocking phase. Either way, I'm very fortunate to have worked with so many bright minds on
          a feature that would knock it out of the park if we were given more time!
        </p>
      </section>
    </>
  )
}
