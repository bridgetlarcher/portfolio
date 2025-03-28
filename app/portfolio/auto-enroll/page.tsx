import { PortfolioItem } from '@/components/PortfolioItem'
import { SectionHeader } from '@/components/SectionHeader'
import Image from 'next/image'

export default function Page() {
  return (
    <PortfolioItem>
      <SectionHeader text="Objectives" />
      <section className="portfolio-section">
        <span>
          We found that customers were being asked for redundant information when signing up for a
          credit card. Specifically, after logging into their account and applying for a card,
          existing customers:
        </span>
        <span>
          <ul className="ml-8 list-disc">
            <li>
              Had to log in <span className="italic">again</span> after already being logged into
              their account beforehand.
            </li>
            <li>
              Had to provide redundant information (first name, last name, date of birth, address,
              etc) that already exists within their account.
            </li>
          </ul>
        </span>
        <span>
          We needed to remove the need for customers to input information that we could supply for
          them via our back-end databases. This would be a big win for both customers and the
          business— streamlining the application and enrollment process would be both satisfying for
          customers and reduce the amount of time between application and account setup.
        </span>
        <span className="text-xl font-semibold">Let's imagine a scenario... ☁️</span>
        <span>
          Say you're signing up for a new credit card through a bank that you're very happy with
          already. You're logged into your account and go to apply for a new card.
        </span>
        <span>
          You land on the application page and see that you're required to input your full name,
          date of birth, email address... the works.{' '}
          <span className="font-bold italic">
            Why can't Capital One just see that I'm logged in already?,
          </span>{' '}
          you think, filling out the unnecessarily blank fields.
        </span>
        <span>
          You submit, and you get approved. Yay! Capital One redirects you to a login page—{' '}
          <span className="font-bold italic">
            Why can't Capital One just see that I'm logged in already?
          </span>
          , you think... again. You log in, <span className="italic">again</span>, begrudgingly.
        </span>
        <span>
          After logging in, you see that your new card is now enrolled to your online account.
          Great! <span className="font-bold">But this experience leaves much to be desired.</span>
        </span>
      </section>
      <SectionHeader text="The Approach" />
      <section className="portfolio-section">
        <div className="portfolio-image flex flex-col-reverse gap-6 md:flex-row">
          <div className="flex flex-col gap-6 md:w-1/2">
            <span>
              I met with my product partners to outline a design strategy based on our objectives.
              When existing customers are logged into their account, and want to apply for another
              card, they run into some pain points that make their experience cumbersome. Designing
              a solution to these pain points would help customers enroll in a more streamlined way,
              satisfying customers while increasing our enrollment rates.
            </span>
            <span>We settled on a few features to rid customers of these pain points:</span>
            <span>
              <ol className="ml-8	list-decimal">
                <li>
                  <span className="font-bold">Prefill</span>: A feature that appears on an existing
                  customer's credit card application page. When clicked, it prefills some of the
                  customer's information to avoid replication. This solution also reduces
                  application time while increasing submission rates.
                </li>
                <li>
                  <span className="font-bold">Auto Enroll</span>: When an existing customer prefills
                  their application, they qualify to be auto enrolled. On approval, we automatically
                  enroll their new credit card. This helps customize and streamline the customer's
                  experience.
                </li>
              </ol>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:w-1/2">
            <img
              src="/auto-enroll/key.png"
              alt="The auto enroll page. Users see this when they successfully Auto Enroll."
            />
            <span className="caption">
              Above is the finalized design for when a customer is successfully Auto Enrolled. After
              clicking the "Continue Online Setup" button, they are redirected to their account.
            </span>
          </div>
        </div>
      </section>
      <SectionHeader text="Outcomes" />
      <section className="portfolio-section">
        <span>
          My job was to develop the Auto Enroll experience and monitor its success. The main
          Javascript frameworks that I used to write this experience included (but were not limited
          to) <span className="font-bold">React, Node.js, and Jest.</span>
        </span>
        <span>
          While developing this experience, I collaborated with Design to ensure that we captured
          the customer experience in a way that saves the customer as much time as possible while
          still keeping them in-the-know about the Auto Enroll process. We talked about how the path
          the user takes through the experience and how we can enhance it end-to-end.
        </span>
        <div className="portfolio-image">
          <img
            src="/auto-enroll/outcomes.png"
            alt="Outcomes. At the top is the old experience, where users spent 13 minutes applying for a card. At the bottom is the auto enroll experience, which saved customers 6 minutes applying."
          />
        </div>
        <span>
          After writing and monitoring the experience that I created, we noticed a large uptick in
          customers who <span className="font-bold">completed their enrollment</span>. We have a
          percentile of customers who fall off after they get approved, which Auto Enroll helped
          mitigate.
        </span>
        <span>
          We also noticed that the average customer's application to completion time{' '}
          <span className="font-bold">improved from 13 minutes to 6 minutes</span> with Auto Enroll.
          About 5-10% of customers who enroll with Capital One see this experience.
        </span>
        <span>
          Overall, the addition of Auto Enroll was a massive success across the org. I am proud to
          have developed this <span className="font-bold">groundbreaking</span> feature that has
          touched millions of customers!
        </span>
      </section>
    </PortfolioItem>
  )
}
