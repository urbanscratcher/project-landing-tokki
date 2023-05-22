import styles from "./faqs.module.scss";
import Faq from "../molecules/Faq";

const Faqs = () => {
  const data = [
    {
      id: "1",
      question: "What Is Soju?",
      answer:
        "Soju is a clear distilled alcoholic beverage that originates from Korea. It is considered the most popular type of alcoholic drink in Korea and is often referred to as Korea's national beverage. Soju is traditionally made from fermented grains like rice, wheat, or barley, although modern versions may also include other ingredients like sweet potatoes or tapioca.",
    },
    {
      id: "2",
      question: "Is Soju Made In America?",
      answer:
        "As a manufacturer of Soju, many manufacturers are aggressively expanding outside of Asian- and Korean-American communities in cities such as New York and Los Angeles, where their sales are only 5% of Soju%27s global sales.",
    },
    {
      id: "3",
      question: "How Much Is Tokki Soju?",
      answer:
        "The price of tokki soju can vary depending on the brand and where it is purchased. In general, a bottle of tokki soju should cost around $10.",
    },
    {
      id: "4",
      question: "Where Is Tokki Soju Made?",
      answer:
        "Tokki is made from sticky rice, water, and a traditional yeast, nuruk, which we hand-cultivate in our backyard.",
    },
    {
      id: "5",
      question: "How Is Tokki Soju Accepted In The United States?",
      answer:
        "Tokki Soju is the first American rice soju to be produced in small batches. Because of government restrictions, rice has traditionally been used to make this spirit, but sweet potatoes and other starchy vegetables have recently been used due to government restrictions. Because Americans have already begun to accept Korean food, Brandon Hill believes that soju will gain popularity among them.",
    },
  ];

  return (
    <section id="faqs" className={styles.faqs}>
      <header>
        <h1>Frequently Asked Questions</h1>
        <p>If you have more questions, contact or DM us!</p>
      </header>
      <ul>
        {data.map((o) => (
          <Faq key={o.id} question={o.question} answer={o.answer} />
        ))}
      </ul>
    </section>
  );
};

export default Faqs;
