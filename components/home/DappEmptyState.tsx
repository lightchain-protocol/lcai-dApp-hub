import { Plus } from "lucide-react";
import DottedLineBackground from "../ui/DottedLineBackground";
import { Button } from "../ui/Button";
import NodAppBox from "../dapp-card/NodAppBox";

function EmptyBoxIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="h-[184px] w-[232px] text-[#7D52F4]"
      fill="none"
      viewBox="0 0 232 184"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 44c0-10 8-18 18-18h132c10 0 18 8 18 18s-8 18-18 18h-7c8 0 15 7 15 15s-7 15-15 15h8c10 0 18 8 18 18s-8 18-18 18H49c-10 0-18-8-18-18s8-18 18-18h8c-8 0-15-7-15-15s7-15 15-15h-7c-10 0-18-8-18-18Z"
        fill="#ECEBFF"
        opacity=".9"
      />
      <path
        d="M69 90h94l13 74H56l13-74Z"
        fill="#F5F4FF"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M89 90h54l18 42H74l15-42Z"
        fill="#ECEBFF"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M95 28h40l24 44v59H73V72l22-44Z"
        fill="#F8F7FF"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M103 36h29l18 36v48H84V72l19-36Z"
        stroke="#C9B8FF"
        strokeDasharray="7 5"
        strokeWidth="1.6"
      />
      <path
        d="M111 44h30l9 20v25h-39V44Z"
        fill="#DCD5FF"
        stroke="#B79DFF"
        strokeWidth="1.8"
      />
      <path d="M126 52v38" stroke="#BBA8FF" strokeLinecap="round" strokeWidth="4" />
      <circle cx="126" cy="103" r="6" fill="#8F80BA" />
      <rect
        height="10"
        rx="5"
        stroke="#BBA8FF"
        strokeWidth="1.6"
        width="44"
        x="94"
        y="132"
      />
      <path d="M70 149h35M116 150h36M75 164h44M126 163h35" stroke="#BBA8FF" strokeLinecap="round" strokeWidth="1.6" />
      <path d="m58 58 14 14M72 58 58 72M178 50l5 5M183 50l-5 5M43 145l5 5M48 145l-5 5M192 167l5 5M197 167l-5 5" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

export default function DappEmptyState() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-main-bg px-4 pb-28 pt-[134px] text-center">
      <DottedLineBackground
        className="opacity-80"
        lineClassName="z-0 h-full w-px border-l border-dashed border-[#000841]/20 opacity-60 motion-safe:animate-[dotted-line-flow_1.2s_linear_infinite]"
      />
      <div className="relative z-10 mx-auto flex max-w-[560px] flex-col items-center">
        <NodAppBox />
        <h2 className="mt-7 text-[28px] font-semibold leading-[1.2] tracking-[-0.28px] text-content-strong md:text-[32px]">
          No dApps Listed Yet
        </h2>
        <p className="mt-4 max-w-[486px] text-base leading-[1.65] tracking-[-0.16px] text-content-bold md:text-lg">
          Got a project built on Lightchain? This is your stage &mdash; submit your dApp and get discovered.
        </p>
        <Button
          href="https://github.com/lightchain-protocol/lcai-dApp-hub#submit-a-dapp"
          className="mt-12 h-14 rounded-[10px] px-6 text-base font-semibold uppercase"
          size="md"
          variant="gradient"
        >
          <Plus className="size-5" />
          Submit your dApp
        </Button>
      </div>
    </section>
  );
}
