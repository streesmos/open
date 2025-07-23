export const metadata = {
  title: "Контакты - АЛМ",
  description: "Свяжитесь с нами",
};

export default function Contact() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 text-center">
          <h1 className="pb-8 font-nacelle text-3xl font-semibold" data-aos="fade-up">
            Свяжитесь с нами
          </h1>
          <p className="mb-6" data-aos="fade-up" data-aos-delay={200}>
            Телефон: <a href="tel:+74951234567" className="text-indigo-500">+7 (495) 123-45-67</a>
          </p>
          <p className="mb-6" data-aos="fade-up" data-aos-delay={400}>
            Email: <a href="mailto:info@alm-company.ru" className="text-indigo-500">info@alm-company.ru</a>
          </p>
          <p data-aos="fade-up" data-aos-delay={600}>Основана 23 сентября 2020 года, г. Москва</p>
        </div>
      </div>
    </section>
  );
}
