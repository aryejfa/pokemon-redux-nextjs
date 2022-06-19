import Layout from "../src/components/layout/Layout";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout pageTitle="404">
      <div className="bg-bac-gray min-h-screen flex">
        <h2>Page 404</h2>
      </div>
    </Layout>
  );
}
