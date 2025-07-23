export const metadata = {
  title: "Регистрация - АЛМ",
  description: "Создание аккаунта",
};

import Link from "next/link";

export default function SignUp() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Создайте аккаунт
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-600"
                  htmlFor="name"
                >
                  Имя <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-600"
                  htmlFor="name"
                >
                  Название компании <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  className="form-input w-full"
                  placeholder="Название компании"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-600"
                  htmlFor="email"
                >
                  Рабочий email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Ваш рабочий email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="password"
                >
                  Пароль <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Пароль (не менее 10 символов)"
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                Зарегистрироваться
              </button>
              <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-gray-400/25">
                или
              </div>
              <button className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
                Войти через Google
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Уже есть аккаунт?{' '}
            <Link className="font-medium text-indigo-500" href="/signin">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
