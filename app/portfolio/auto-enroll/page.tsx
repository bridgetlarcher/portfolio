import { CalloutCard } from '@/components/ui/CalloutCard'
import { Callout } from '@/components/ui/Callout'
import { Section } from '@/components/ui/Section'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <Section title="Objectives" type="portfolio">
        <p>
          We found that customers were being asked for redundant information when signing up for a
          credit card. Specifically, after logging into their account and applying for a card,
          existing customers:
        </p>
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
        <p>
          We needed to remove the need for customers to input information that we could supply for
          them via our back-end databases. This would be a big win for both customers and the
          business— streamlining the application and enrollment process would be both satisfying for
          customers and reduce the amount of time between application and account setup.
        </p>
        <Callout header="Let's imagine a scenario... ☁️" />
        <p>
          Say you're signing up for a new credit card through a bank that you're very happy with
          already. You're logged into your account and go to apply for a new card.
        </p>
        <p>
          You land on the application page and see that you're required to input your full name,
          date of birth, email address... the works.{' '}
          <span className="font-bold italic">
            Why can't Capital One just see that I'm logged in already?,
          </span>{' '}
          you think, filling out the unnecessarily blank fields.
        </p>
        <p>
          You submit, and you get approved. Yay! Capital One redirects you to a login page—{' '}
          <span className="font-bold italic">
            Why can't Capital One just see that I'm logged in already?
          </span>
          , you think... again. You log in, <span className="italic">again</span>, begrudgingly.
        </p>
        <p>
          After logging in, you see that your new card is now enrolled to your online account.
          Great! <span className="font-bold">But this experience leaves much to be desired.</span>
        </p>
      </Section>
      <Section title="The Approach" type="portfolio">
        <p>
          I met with my product partners to outline a design strategy based on our objectives. When
          existing customers are logged into their account, and want to apply for another card, they
          run into some pain points that make their experience cumbersome. Designing a solution to
          these pain points would help customers enroll in a more streamlined way, satisfying
          customers while increasing our enrollment rates.
        </p>
        <p>We settled on a few features to rid customers of these pain points:</p>
        <div className="flex flex-col-reverse gap-6 md:flex-row">
          <div className="flex flex-col gap-6 md:w-1/2">
            <Callout
              header="Prefill"
              description="A feature that appears on an existing
                customer's credit card application page. When clicked, it prefills some of the
                customer's information to avoid replication. This solution also reduces application
                time while increasing submission rates."
              type="list"
              listNumber="01"
            />
            <Callout
              header="Auto Enroll"
              description="When an existing customer prefills
                their application, they qualify to be auto enrolled. On approval, we automatically
                enroll their new credit card. This helps customize and streamline the customer's
                experience."
              type="list"
              listNumber="02"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:w-1/2">
            <Image
              src="/auto-enroll/key.png"
              alt="The auto enroll page. Users see this when they successfully Auto Enroll."
              width={860}
              height={706}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <span className="caption">
              Above is the finalized design for when a customer is successfully Auto Enrolled. After
              clicking the "Continue Online Setup" button, they are redirected to their account.
            </span>
          </div>
        </div>
      </Section>
      <Section title="Outcomes" type="portfolio">
        <p>
          My job was to develop the Auto Enroll experience and monitor its success. The main
          Javascript frameworks that I used to write this experience included (but were not limited
          to) <span className="font-bold">React, Node.js, and Jest.</span>
        </p>
        <p>
          While developing this experience, I collaborated with Design to ensure that we captured
          the customer experience in a way that saves the customer as much time as possible while
          still keeping them in-the-know about the Auto Enroll process. We talked about how the path
          the user takes through the experience and how we can enhance it end-to-end.
        </p>
        <div className="portfolio-image">
          <Image
            src="/auto-enroll/outcomes.png"
            alt="Outcomes. At the top is the old experience, where users spent 13 minutes applying for a card. At the bottom is the auto enroll experience, which saved customers 7 minutes applying."
            width={1046}
            height={575}
            sizes="100vw"
          />
        </div>
        <p>
          After writing and monitoring the experience that I created, we noticed a large uptick in
          customers who completed their enrollment. We have a percentile of customers who fall off
          after they get approved, which Auto Enroll helped mitigate.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <CalloutCard stat="13 → 6 min" label="Average application time" />
          <CalloutCard stat="~10%" label="Enrolling customers reached" />
        </div>
        <Callout
          header="
          We also noticed that the average customer's application to completion time
          improved from 13 minutes to 6 minutes with Auto Enroll.
          About 10% of customers who enroll with Capital One see this experience."
        />
        <p>
          Overall, the addition of Auto Enroll was a massive success across the org. I am proud to
          have developed this groundbreaking feature that has touched millions of customers!
        </p>
      </Section>
    </>
  )
}
