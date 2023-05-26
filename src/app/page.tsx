import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="h-full">
      <Header />

      <div className="w-full h-full pl-4 md:pl-16 pr-4 md:pr-16">
        <div className="w-full h-full border-primary border-l-2 border-r-2">
          {/* Home */}
          <section></section>

          {/* About */}
          <section></section>

          {/* Skills */}
          <section></section>

          {/* Projects */}
          <section></section>

          {/* Contact */}
          <section></section>
        </div>
      </div>

      <footer className="w-full h-auto border-t-2 border-primary">
        <div className="pl-4 md:pl-16 pr-4 md:pr-16">
          <div className="pl-2 pr-2 h-16 flex justify-center items-center w-full border-primary border-l-2 border-r-2">
            <p className="text-center text-xs md:text-sm">
              Designed and developed with ♥ by{" "}
              <a
                target="_blank"
                href="https://github.com/diego5f5"
                className="underline hover:font-semibold transition-all"
              >
                Diego Ferreira
              </a>{" "}
              ©
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
