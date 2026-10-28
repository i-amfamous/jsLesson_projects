import { useState } from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import AnimatedIcon from './AnimatedIcon'
import { contactDetails } from '../contactDetails'
import './InfoPage.css'

const pages = {
  why: {
    eyebrow: 'Why TechX',
    title: 'A calmer way to run your business.',
    intro: 'The tools behind your counter should make work simpler. TechX brings your daily operations together, so you can spend less time keeping systems in sync and more time looking after customers.',
    cards: [
      { icon: 'business', title: 'One connected workspace', body: 'Sales, inventory, customer records and payments work together in one clear system.' },
      { icon: 'insights', title: 'Know what is happening', body: 'Understand your sales, margins and stock with reports you can use to make your next decision.' },
      { icon: 'secure', title: 'Reliable by design', body: 'Keep serving customers through connection interruptions, with sales syncing automatically when you are back online.' },
      { icon: 'growth', title: 'Room to grow', body: 'Start with a single counter and add tills, teammates and locations as your business grows.' },
    ],
    additionalSections: [
      {
        title: 'A clearer view of daily work',
        intro: 'Bring the everyday details of running a business into one practical workflow.',
        items: [
          { title: 'Start with the sale', body: 'Record a checkout and receipt, then keep the inventory record connected to what was sold.' },
          { title: 'Keep customer details together', body: 'Use customer records and loyalty tools alongside sales instead of maintaining a separate list.' },
          { title: 'Review what changed', body: 'Use the reporting views to check activity and decide what needs attention next.' },
        ],
      },
      {
        title: 'Make it fit your operation',
        intro: 'You can begin with a single counter and build a workflow around the way your team already works.',
        items: [
          { title: 'Choose a starting point', body: 'Organize your catalogue and decide which products, prices and categories should be ready at checkout.' },
          { title: 'Set up the team', body: 'Give staff the access they need for their role, from checkout through store management.' },
          { title: 'Add capacity over time', body: 'As the business changes, bring additional tills, teammates and locations into the same workspace.' },
        ],
      },
      {
        title: 'A practical way to begin',
        intro: 'Start with the part of your operation that needs the most attention.',
        items: [
          { title: 'Name the daily friction', body: 'Choose one task that takes too long, such as reconciling stock, reviewing sales or sharing information.' },
          { title: 'Match it to a workflow', body: 'Explore the checkout, inventory, customer and reporting tools that relate to that task.' },
          { title: 'See it in context', body: 'Talk through your current setup and decide whether the platform fits the way your team works.' },
        ],
      },
      {
        title: 'Questions worth asking',
        intro: 'Use a walkthrough to check how the platform would fit the details of your own operation.',
        items: [
          { title: 'Can the team find products?', body: 'Review how your catalogue is organized and whether product names and categories make sense to staff.' },
          { title: 'Can you see what is changing?', body: 'Look at the reports you would use to follow sales, margins and stock through a normal week.' },
          { title: 'Can the setup grow with you?', body: 'Discuss how additional team members, tills or locations would fit into the account over time.' },
        ],
      },
    ],
    cta: 'See all features',
    ctaTo: '/features',
  },
  features: {
    eyebrow: 'The platform',
    title: 'Everything that keeps business moving.',
    intro: 'TechX brings the everyday work of running a store into one thoughtfully connected point of sale. Simple to learn, capable enough to grow with you.',
    cards: [
      { icon: 'checkout', title: 'Fast checkout', body: 'Keep queues moving with keyboard-friendly sales, discounts, split payments and instant receipts.' },
      { icon: 'inventory', title: 'Live inventory', body: 'Track stock as you sell, get a clearer view of what needs reordering and keep product records organized.' },
      { icon: 'reports', title: 'Useful reporting', body: 'Review sales, margins, best sellers and slow movers by day, till or product line.' },
      { icon: 'offline', title: 'Offline selling', body: 'Continue recording sales when the internet drops. TechX syncs your activity when the connection returns.' },
      { icon: 'team', title: 'Team access', body: 'Give each person the right permissions, from cashier to store manager.' },
      { icon: 'loyalty', title: 'Customer loyalty', body: 'Keep customer records and reward repeat visits with built-in loyalty tools.' },
    ],
    additionalSections: [
      {
        title: 'A connected path through the day',
        intro: 'The features work together across checkout, stock, customers and reporting.',
        items: [
          { title: 'At checkout', body: 'Use keyboard-friendly sales, discounts and split payments to handle everyday transactions.' },
          { title: 'After each sale', body: 'Keep product records and stock levels current as items move through the till.' },
          { title: 'At close', body: 'Review sales and product performance by day, till or product line to inform the next order.' },
        ],
      },
      {
        title: 'Built for changing conditions',
        intro: 'Keep essential work moving across devices and through changes in connectivity.',
        items: [
          { title: 'Work across devices', body: 'Use a tablet, laptop or phone with a modern browser, depending on where the work happens.' },
          { title: 'Continue offline', body: 'Record sales during an internet interruption and sync activity when the connection returns.' },
          { title: 'Give access by role', body: 'Set team access to match responsibilities, from a cashier to a store manager.' },
        ],
      },
      {
        title: 'Choose what to explore first',
        intro: 'You do not need to review every feature at once. Start with the workflows that matter to your team.',
        items: [
          { title: 'Checkout and payments', body: 'Walk through a typical sale, including the discounts, split payments and receipts your team uses.' },
          { title: 'Products and stock', body: 'Review how your catalogue is organized and how you want stock movements to be recorded.' },
          { title: 'Reports and access', body: 'Decide which results you need to review and which team members should see them.' },
        ],
      },
      {
        title: 'Keep daily work visible',
        intro: 'A connected system is most useful when each person can find the information they need.',
        items: [
          { title: 'Make products recognizable', body: 'Use a clear catalogue structure so staff can locate products and confirm prices during checkout.' },
          { title: 'Keep records current', body: 'Review product and customer information as part of the normal sales and stock routine.' },
          { title: 'Use reports consistently', body: 'Check sales and stock views regularly so changes do not wait until a problem appears.' },
        ],
      },
    ],
    cta: 'Compare plans',
    ctaTo: '/pricing',
  },
  'how-it-works': {
    eyebrow: 'Getting started',
    title: 'From product list to first sale.',
    intro: 'Getting started is straightforward. Set up your catalogue, choose the device that suits your counter and let TechX take care of the everyday details.',
    cards: [
      { icon: 'inventory', title: '1. Set up your catalogue', body: 'Import your products, prices and categories, or start from a template and build as you go.' },
      { icon: 'checkout', title: '2. Start selling anywhere', body: 'Use a tablet at the counter, a laptop in the back office or a phone on the floor. Your account stays in sync.' },
      { icon: 'reports', title: '3. Make your next move', body: 'Close the day with a clear report of what sold, what earned and what to restock.' },
    ],
    additionalSections: [
      {
        title: 'Prepare the basics',
        intro: 'A little preparation helps your first day run smoothly. Start with the information your team uses most.',
        items: [
          { title: 'Gather your product list', body: 'Collect product names, prices and categories so you can import them or use them to build your catalogue.' },
          { title: 'Choose your devices', body: 'Decide which tablet, laptop or phone suits the counter and where your team needs access.' },
          { title: 'Plan the team setup', body: 'Identify who will use the system and which responsibilities each person needs to handle.' },
        ],
      },
      {
        title: 'Build a steady routine',
        intro: 'Once checkout is ready, use the same connected information to manage the rest of the working day.',
        items: [
          { title: 'Keep selling', body: 'Record sales and receipts at the counter, including when internet access is interrupted.' },
          { title: 'Check stock', body: 'Use current product records to review what has moved and what may need reordering.' },
          { title: 'Close with context', body: 'Review the day’s sales and product activity before planning the next shift.' },
        ],
      },
      {
        title: 'A simple first-day checklist',
        intro: 'Before the team begins, walk through a few common tasks together.',
        items: [
          { title: 'Run a sample sale', body: 'Practice finding a product, completing a checkout and issuing a receipt on the device at the counter.' },
          { title: 'Check a product record', body: 'Confirm that product names, prices and categories are easy for staff to recognize and use.' },
          { title: 'Review team access', body: 'Make sure each person can reach the parts of the system needed for their responsibilities.' },
        ],
      },
      {
        title: 'When your setup changes',
        intro: 'The same routine can adapt as you add products, devices or people.',
        items: [
          { title: 'Update the catalogue', body: 'Add new products and keep prices and categories clear as your range changes.' },
          { title: 'Bring in new staff', body: 'Review each person’s role and access as the team grows or responsibilities shift.' },
          { title: 'Review the reports', body: 'Use daily sales and stock activity to help decide what to restock and what to review.' },
        ],
      },
    ],
    cta: 'Talk to our team',
    ctaTo: '/contact',
  },
  benefits: {
    eyebrow: 'The difference',
    title: 'Less busywork. More business.',
    intro: 'A good point of sale should give you time back. TechX takes repetitive admin off your team’s plate and gives you a dependable view of how the business is doing.',
    cards: [
      { icon: 'checkout', title: 'Confident checkout', body: 'Make accurate sales quickly with clear workflows for everyday transactions.' },
      { icon: 'inventory', title: 'Fewer stock surprises', body: 'Keep stock levels current as products move through the till.' },
      { icon: 'reports', title: 'Clearer decisions', body: 'See which products and days are driving your sales and margins.' },
      { icon: 'offline', title: 'Keep trading', body: 'Stay ready to serve when internet access is interrupted.' },
      { icon: 'team', title: 'A team on the same page', body: 'Share consistent product, sales and customer information across your staff.' },
      { icon: 'growth', title: 'A business that can scale', body: 'Bring new team members and locations into the same familiar workflow.' },
    ],
    additionalSections: [
      {
        title: 'Time back for the work that matters',
        intro: 'Connected tools reduce the need to repeat routine updates in separate places.',
        items: [
          { title: 'Fewer repeated updates', body: 'Sales and stock information stay connected, helping your team spend less time reconciling separate records.' },
          { title: 'A smoother handoff', body: 'Shared product, sales and customer information helps staff work from the same view of the business.' },
          { title: 'More useful closeouts', body: 'Review daily activity in context instead of gathering figures from several disconnected systems.' },
        ],
      },
      {
        title: 'Useful at every stage',
        intro: 'A clear starting workflow can keep working as your team and operation change.',
        items: [
          { title: 'For a small team', body: 'Begin with a single counter and the everyday checkout and inventory tools your staff need.' },
          { title: 'For a growing team', body: 'Use role-based access to keep responsibilities clear as more staff join the operation.' },
          { title: 'For more locations', body: 'Bring additional tills and locations into the same account as the business expands.' },
        ],
      },
      {
        title: 'Notice the difference in your routine',
        intro: 'Look at the everyday tasks that take time and decide where a connected workflow could help.',
        items: [
          { title: 'At the counter', body: 'Consider whether staff can complete common transactions accurately without slowing down service.' },
          { title: 'Behind the scenes', body: 'Check whether product and customer information is easy to keep current and share with the team.' },
          { title: 'At the end of the day', body: 'Think about which sales and stock details would make closing and planning clearer.' },
        ],
      },
      {
        title: 'Focus on practical outcomes',
        intro: 'A useful POS workflow should make routine tasks easier to understand and complete.',
        items: [
          { title: 'More consistent checkout', body: 'Give staff a clear process for common sales, discounts, receipts and payment situations.' },
          { title: 'Fewer gaps in stock records', body: 'Keep product information and sales activity together so stock changes are easier to review.' },
          { title: 'Better-informed next steps', body: 'Use reports to see what sold and what may need attention before making an order or shift plan.' },
        ],
      },
    ],
    cta: 'Explore the platform',
    ctaTo: '/features',
  },
  reviews: {
    eyebrow: 'Customer stories',
    title: 'Made for real working days.',
    intro: 'A smoother close, dependable checkout and clearer reporting can make a meaningful difference. Here is what business owners have shared about TechX.',
    quotes: [
      { quote: 'TechX replaced three separate systems with one. Our end-of-day closing went from forty minutes to about twelve.', name: 'Ama Owusu', role: 'Owner, Adonais Market — Accra' },
      { quote: 'The offline mode carried us through a three-hour outage without losing a single sale. That alone paid for the system.', name: 'Kwame Mensah', role: 'Manager, Lakeside Coffee — Accra' },
      { quote: 'The reports are clear enough that our accountant signs off without asking me a single question.', name: 'Fatima Bello', role: 'Founder, MedPlus Pharmacy — Kumasi' },
    ],
    additionalSections: [
      {
        title: 'What stands out in these stories',
        intro: 'The experiences shared by business owners point to a few practical priorities.',
        items: [
          { title: 'Less switching between tools', body: 'The value of a connected workspace is easier to see when sales, stock and reporting are part of one routine.' },
          { title: 'Confidence during outages', body: 'Offline selling matters when a business needs to keep recording transactions through connection interruptions.' },
          { title: 'Reports people can use', body: 'Clear sales and product views help owners bring useful information into everyday decisions.' },
        ],
      },
      {
        title: 'Find the details that matter to you',
        intro: 'Every operation has different priorities. Use these questions to guide a closer look at the platform.',
        items: [
          { title: 'Where does work slow down?', body: 'Think about checkout, stock updates, end-of-day routines or the way your team shares customer information.' },
          { title: 'What should be easier to see?', body: 'Consider which sales, margins or product movements would help you make your next decision.' },
          { title: 'What would you like to improve first?', body: 'Choose one everyday task to discuss, then explore the features and plan that suit that need.' },
        ],
      },
      {
        title: 'Bring your questions to a demo',
        intro: 'Use a conversation or product walkthrough to see how the workflows relate to your own business.',
        items: [
          { title: 'Describe a real day', body: 'Explain how a sale, stock update or closeout works in your business today.' },
          { title: 'Ask about the details', body: 'Discuss devices, offline use, team access or reporting based on the way you operate.' },
          { title: 'Decide what fits', body: 'Compare the workflow with your priorities and ask about the plan that supports them.' },
        ],
      },
      {
        title: 'Turn feedback into a checklist',
        intro: 'Use the experiences shared here to identify what you want to check in your own setup.',
        items: [
          { title: 'Measure the current routine', body: 'Notice how long checkout, closeout and stock review take before choosing what you want to improve.' },
          { title: 'Test the important workflow', body: 'Ask to see the tasks your team performs most, including what happens when connectivity drops.' },
          { title: 'Check reporting needs', body: 'Decide which figures are useful to your team and whether the available reports support those decisions.' },
        ],
      },
    ],
    cta: 'Find your plan',
    ctaTo: '/pricing',
  },
  pricing: {
    eyebrow: 'Simple pricing',
    title: 'A plan for your next stage.',
    intro: 'Start with what you need today. Every plan includes a 14-day free trial, and you can cancel whenever you like.',
    plans: [
      { name: 'Starter', price: 'GH₵ 149', note: 'per month, per till', features: ['1 till, 1 user', 'Sales & receipts', 'Basic inventory', 'Email support'], cta: 'Ask about Starter' },
      { name: 'Growth', price: 'GH₵ 349', note: 'per month, per till', features: ['Up to 5 tills', 'Full reporting suite', 'Loyalty & customers', 'Priority support'], cta: 'Ask about Growth', featured: true },
      { name: 'Enterprise', price: 'Custom', note: 'annual agreement', features: ['Unlimited locations', 'Roles & permissions', 'API & custom reports', 'Dedicated manager'], cta: 'Talk to sales' },
    ],
    additionalSections: [
      {
        title: 'Compare plans by what you need',
        intro: 'Choose a plan around your current tills, team and reporting needs rather than paying for capacity you do not use.',
        items: [
          { title: 'Starter', body: 'A straightforward starting point for one till and one user, with sales, receipts, basic inventory and email support.' },
          { title: 'Growth', body: 'For businesses that need up to five tills, the full reporting suite, loyalty tools and priority support.' },
          { title: 'Enterprise', body: 'For multi-location operations looking for unlimited locations, roles, custom reports and a dedicated manager.' },
        ],
      },
      {
        title: 'Questions to settle before choosing',
        intro: 'A quick review of your current setup can make a plan conversation more useful.',
        items: [
          { title: 'Count your tills', body: 'Note how many checkout points you use now and whether you expect to add any soon.' },
          { title: 'List the people and tools', body: 'Consider who needs access and whether full reporting, loyalty or custom reports are important.' },
          { title: 'Talk through the next step', body: 'Ask about plan fit, setup and support before deciding. The listed plans include a 14-day trial.' },
        ],
      },
      {
        title: 'Keep your choice flexible',
        intro: 'Select a starting plan based on current needs, then review it again when your operation changes.',
        items: [
          { title: 'Start with current capacity', body: 'Use the number of tills and users you need now as the first comparison point.' },
          { title: 'Check the included tools', body: 'Compare inventory, reporting, loyalty and support features against your priorities.' },
          { title: 'Ask before committing', body: 'Discuss any details that are unclear and use the free-trial period to evaluate the fit.' },
        ],
      },
      {
        title: 'Review the plan as you grow',
        intro: 'Your requirements can change, so make plan reviews part of your normal business check-in.',
        items: [
          { title: 'Revisit your capacity', body: 'Check whether the number of tills and users still reflects how your team works.' },
          { title: 'Revisit your priorities', body: 'Consider whether you now need more reporting, loyalty features, locations or support.' },
          { title: 'Ask about changes', body: 'Contact the team when your operation changes to discuss the plan that best fits your current needs.' },
        ],
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Good questions. Clear answers.',
    intro: 'Here are a few things businesses often want to know before getting started. Still have a question? Our team is happy to help.',
    faqs: [
      { q: 'Do I need a computer to use it?', a: 'No. TechX runs on any tablet, laptop or phone with a modern browser. Many counters run it on a tablet with a receipt printer and barcode scanner.' },
      { q: 'What happens when the internet goes off?', a: 'Sales keep working in offline mode and are stored on the device. When the connection returns, everything syncs automatically.' },
      { q: 'Can I use it on more than one device?', a: 'Yes. Sign in on a counter tablet, a back-office laptop and a manager’s phone. Everything stays in sync in the same account.' },
      { q: 'How long does setup take?', a: 'Most businesses are selling within an afternoon. Import your product list, connect a printer and you are ready for the first customer.' },
      { q: 'Do you handle refunds, voids and split payments?', a: 'Yes. Refunds, voids, discounts, split payments and cash-back are supported, and every adjustment is recorded with the staff member who made it.' },
    ],
    additionalSections: [
      {
        title: 'Getting ready to start',
        intro: 'A few details can help you move from questions to a setup that matches your business.',
        items: [
          { title: 'Your products', body: 'Think about how your catalogue is organized today and whether you will import an existing product list.' },
          { title: 'Your devices', body: 'Decide which tablet, laptop or phone your team will use at the counter and elsewhere.' },
          { title: 'Your team', body: 'List the staff roles that need access so permissions can reflect their day-to-day responsibilities.' },
        ],
      },
      {
        title: 'Still have a question?',
        intro: 'If your situation is not covered above, send a note with enough context for a useful answer.',
        items: [
          { title: 'Describe your setup', body: 'Share the type of business you run, how many tills you have and which devices you use.' },
          { title: 'Explain what you need', body: 'Mention the workflow or feature you are considering, such as inventory, reporting or offline selling.' },
          { title: 'Choose how to reach us', body: 'Use the contact page to send a request by email, or call or message us on WhatsApp.' },
        ],
      },
      {
        title: 'Explore the next step',
        intro: 'Once you have the basics, you can look more closely at the parts that match your needs.',
        items: [
          { title: 'Compare the plans', body: 'Review the number of tills, included tools and support options for each plan.' },
          { title: 'See the features', body: 'Explore checkout, inventory, reporting, offline selling and team access in more detail.' },
          { title: 'Ask about your setup', body: 'Contact us with your devices, team size and main questions for a more relevant conversation.' },
        ],
      },
      {
        title: 'Bring the details to a demo',
        intro: 'A practical example makes it easier to decide whether a workflow suits your business.',
        items: [
          { title: 'Use your own example', body: 'Describe a typical sale, a product you need to track or a report you want to review.' },
          { title: 'Include the edge cases', body: 'Ask about offline selling, refunds, split payments or team permissions if those matter to your operation.' },
          { title: 'Agree on what to review', body: 'Keep a short list of the features and plan details you want to confirm before choosing a next step.' },
        ],
      },
    ],
    cta: 'Ask us a question',
    ctaTo: '/contact',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s make your next business day easier.',
    intro: 'Tell us about your business and what you are looking for. Our team will help you explore TechX POS and find the right next step.',
    additionalSections: [
      {
        title: 'Make your message useful',
        intro: 'A little context helps us understand what you need and point you toward relevant information.',
        items: [
          { title: 'Tell us about your business', body: 'Share what kind of business you run, where you are based and how many checkout points you use.' },
          { title: 'Describe your current setup', body: 'Mention the devices and tools you use today, along with any workflow that is difficult to manage.' },
          { title: 'Name your priority', body: 'Let us know whether checkout, inventory, reporting, offline selling or team access matters most right now.' },
        ],
      },
      {
        title: 'Choose how to get in touch',
        intro: 'Use the contact method that works best for you. We are based in Achimota, Accra.',
        items: [
          { title: 'Email', body: 'Send a detailed question or demo request to nganbewuborijaamos@gmail.com.' },
          { title: 'Call', body: 'Call +233 59 810 9267 to discuss your needs directly.' },
          { title: 'WhatsApp', body: 'Message +233 59 810 9267 if you prefer to start the conversation on WhatsApp.' },
        ],
      },
      {
        title: 'What to expect from a conversation',
        intro: 'The first step is simply understanding your business and what you want to improve.',
        items: [
          { title: 'Share your priorities', body: 'Tell us which parts of the daily workflow you want to make simpler, from checkout to reporting.' },
          { title: 'Discuss the setup', body: 'We can talk through your tills, devices, team and the features you want to explore.' },
          { title: 'Choose your next step', body: 'Use the information to decide whether to request a demo, compare plans or ask a follow-up question.' },
        ],
      },
      {
        title: 'Topics we can explore',
        intro: 'Bring questions about the daily tasks and tools you want to connect.',
        items: [
          { title: 'Sales and checkout', body: 'Talk about the transactions your team handles, from receipts and discounts to split payments.' },
          { title: 'Inventory and reporting', body: 'Ask how product records, stock movements and sales reports relate to your current process.' },
          { title: 'Devices and team access', body: 'Discuss which devices you use and how staff responsibilities should shape access.' },
        ],
      },
    ],
  },
}

const InfoPage = ({ pageKey }) => {
  const page = pages[pageKey]
  const [submitted, setSubmitted] = useState(false)

  const sendContactRequest = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const business = String(form.get('business') || '').trim()
    const message = String(form.get('message') || '').trim()
    const subject = encodeURIComponent(`TechX demo request from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nBusiness: ${business}\n\n${message}`)
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <title>{pageKey === 'how-it-works' ? 'How it works' : page.eyebrow} | TechX Market</title>
      <Header />
      <main className={`infoPage infoPage-${pageKey}`}>
        <header className="infoHero">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1 className="infoTitle">{page.title}</h1>
          <p className="infoIntro">{page.intro}</p>
          {pageKey === 'contact' && (
            <div className="contactChannels">
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              <a href={`tel:${contactDetails.phone}`}>Call {contactDetails.phoneDisplay}</a>
              <a href={contactDetails.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
              <span>{contactDetails.location}</span>
            </div>
          )}
        </header>

        {page.cards && (
          <section className="infoContent">
            <div className={`infoCards${page.cards.length === 3 ? ' infoCardsThree' : ''}`}>
              {page.cards.map(({ icon, title, body }) => (
                <article className="infoCard" key={title}>
                  <AnimatedIcon name={icon} />
                  <h2>{title}</h2>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {page.quotes && (
          <section className="infoContent">
            <div className="infoQuotes">
              {page.quotes.map(({ quote, name, role }) => (
                <figure className="infoQuote" key={name}>
                  <blockquote>{quote}</blockquote>
                  <figcaption><strong>{name}</strong><span>{role}</span></figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {page.plans && (
          <section className="infoContent">
            <div className="infoPlans">
              {page.plans.map(({ name, price, note, features, cta, featured }) => (
                <article className={`infoPlan${featured ? ' infoPlanFeatured' : ''}`} key={name}>
                  <h2>{name}</h2>
                  <p className="infoPlanPrice">{price}<span>{note}</span></p>
                  <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <a className={`btn ${featured ? 'btnPrimary' : 'btnGhost'}`} href={`mailto:${contactDetails.email}?subject=${encodeURIComponent(`${cta} — ${name} plan`)}`}>
                    {cta} <span className="buttonArrow" aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}

        {page.faqs && (
          <section className="infoContent">
            <div className="infoFaqs">
              {page.faqs.map(({ q, a }) => (
                <details className="infoFaq" key={q}>
                  <summary>{q}<span aria-hidden="true">+</span></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {pageKey === 'contact' && (
          <section className="infoContent">
            <form className="contactForm" onSubmit={sendContactRequest}>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" autoComplete="name" required />
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
              <label htmlFor="contact-business">Business name <span>(optional)</span></label>
              <input id="contact-business" name="business" autoComplete="organization" />
              <label htmlFor="contact-message">What would you like to know?</label>
              <textarea id="contact-message" name="message" rows="4" required />
              <button className="btn btnPrimary" type="submit">Send a demo request <span className="buttonArrow" aria-hidden="true">↗</span></button>
              {submitted && <p className="contactNote" role="status">Your email app should open with your request ready to send. If it does not, email {contactDetails.email}.</p>}
            </form>
          </section>
        )}

        {page.additionalSections?.map(({ title, intro, items }) => (
          <section className="infoContent infoEditorial" key={title}>
            <header className="infoEditorialHead">
              <h2 className="sectionTitle">{title}</h2>
              <p>{intro}</p>
            </header>
            <div className="infoEditorialCards">
              {items.map(({ title: itemTitle, body }) => (
                <article className="infoEditorialCard" key={itemTitle}>
                  <h3>{itemTitle}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="infoCta">
          <h2>{pageKey === 'pricing' ? 'Not sure which plan is right?' : 'Ready to see what TechX can do for you?'}</h2>
          <p>Tell us a little about your business and we’ll help you find a good fit.</p>
          <Link className="btn btnLight" to={page.ctaTo || '/contact'}>{page.cta || 'Talk to our team'} <span className="buttonArrow" aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default InfoPage
