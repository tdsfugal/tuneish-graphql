import dynamic from "next/dynamic";

const DynamicCircle = dynamic(() => import("./circle"), {
  loading: () => null,
  ssr: false,
});

export function Circle({ r }) {
  return <DynamicCircle r={r} />;
}
