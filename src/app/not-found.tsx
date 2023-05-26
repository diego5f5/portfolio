export default function NotFound() {
  return (
    <div className="h-full w-full flex-col flex justify-center items-center">
      <h2>Not Found.</h2>
      <p>
        Please visit{" "}
        <a className="underline" href="/">
          Home Page
        </a>
      </p>
    </div>
  );
}
