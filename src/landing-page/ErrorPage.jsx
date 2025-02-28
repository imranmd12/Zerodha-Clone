import React from "react";

export default function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <p>
        We couldn’t find the page you were looking for. Visit{" "}
        <link to="*">Zerodha’s home page</link>
      </p>
    </div>
  );
}
