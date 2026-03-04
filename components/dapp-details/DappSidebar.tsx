import { ArrowLeft, CircleFadingPlus, ExternalLink, Globe, Hash, RefreshCcw } from "lucide-react";
import Image from "next/image";
import CopyButton from "@/components/CopyButton";
import ReportDialog from "@/components/ReportDialog";
import ShareDialog from "@/components/ShareDialog";
import { Button } from "@/components/ui/Button";

const DappSidebar = () => {
  const projectID = "52591";

  return (
    <div className="max-w-102.5 w-full bg-surface-base-faint rounded-2xl sticky lg:top-26">
      {/* Back Button */}
      <div className="border-b border-border-soft">
        <button className="p-4 flex gap-3 items-center text-base font-medium leading-none tracking-[-0.4px] text-content-strong cursor-pointer hover:text-content-ultra lcai-transition">
          <ArrowLeft className="size-5" />
          BACK
        </button>
      </div>

      <div className="divide-y divide-border-soft">
        <div className="px-4 md:px-6 py-4 md:py-6">
          <div
            className="relative h-14 md:h-20 w-14 md:w-20 inline-flex items-center justify-center rounded-full bg-surface-base-dark mb-2 md:mb-5"
          >
            <Image
              src={"/images/dapp-item-logo/dapp-logo-icon-05.png"}
              alt={`KyberSwap logo`}
              fill
              sizes="(min-width: 768px) 4rem, 3.5rem"
              className="rounded-full object-cover"
            />
          </div>

          <h1 className="text-2xl md:text-4xl font-semibold leading-[1.2] tracking-[-0.36px] text-content-ultra mb-0.5">KyberSwap</h1>
          <p className="text-base md:text-lg leading-[1.7] tracking-[-0.18px] text-content-bold">Your Finance, Your Freedom</p>

          <Button
            variant={"gradient"}
            size={"md"}
            className={"w-full mt-4 md:mt-6"}
          >
            OPEN DAPP
            <ExternalLink className="size-5" />
          </Button>
        </div>

        {/* <!-- Info Section --> */}
        <div className="space-y-3 md:space-y-5 px-4 md:px-6 py-4 md:py-6">

          <div className="flex items-center gap-3 text-sm">
            <div className="w-10 h-10 rounded-full bg-surface-base-extra-light text-content-brand-light p-2 flex items-center justify-center">
              <Globe className="size-5" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs leading-[1.2] tracking-[-0.12px] text-content-bold">Website</p>
              <p className="text-base font-medium leading-normal tracking-[-0.16px] text-content-brand-light break-all">https://kyberswap.com/swap/monad</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="w-10 h-10 rounded-full bg-surface-base-extra-light text-content-brand-light p-2 flex items-center justify-center">
              <CircleFadingPlus className="size-5" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs leading-[1.2] tracking-[-0.12px] text-content-bold">Listed on DappRadar</p>
              <p className="text-base font-medium leading-normal tracking-[-0.16px] text-content-brand-strong">13 Jun 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="w-10 h-10 rounded-full bg-surface-base-extra-light text-content-brand-light p-2 flex items-center justify-center">
              <RefreshCcw className="size-5" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs leading-[1.2] tracking-[-0.12px] text-content-bold">Last Updated</p>
              <p className="text-base font-medium leading-normal tracking-[-0.16px] text-content-brand-strong">16 Oct 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="w-10 h-10 rounded-full bg-surface-base-extra-light text-content-brand-light p-2 flex items-center justify-center">
              <Hash className="size-5" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs leading-[1.2] tracking-[-0.12px] text-content-bold">Project ID</p>
              <p className="text-base font-medium leading-normal tracking-[-0.16px] text-content-brand-strong flex items-center gap-2">
                {projectID}
                <CopyButton
                  copyText={projectID}
                />
              </p>
            </div>
          </div>

          {/* <!-- Icon Buttons --> */}
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <Button
              variant={"ghost"}
              size={"md"}
              className={"text-content-brand-light hover:text-content-brand-light"}
            >
              <span className="flex items-center justify-center w-6 md:w-7 h-6 md:h-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21}
                  height={26}
                  viewBox="0 0 21 26"
                  fill="none"
                >
                  <path
                    d="M12.834 0.000976562C13.3563 0.000464187 13.8739 0.102797 14.3564 0.302734C14.8396 0.502991 15.2793 0.796489 15.6484 1.16699H15.6475L19.833 5.35156H19.832C20.2024 5.72038 20.4969 6.15884 20.6973 6.6416C20.8978 7.12487 21.0006 7.6438 21 8.16699V22.167C20.9999 23.095 20.6317 23.9853 19.9756 24.6416C19.3193 25.2979 18.4281 25.6669 17.5 25.667H3.5C2.57201 25.6669 1.68166 25.2977 1.02539 24.6416C0.369194 23.9853 8.62779e-05 23.0951 0 22.167V3.5C8.71785e-05 2.57186 0.369091 1.68169 1.02539 1.02539C1.68169 0.369091 2.57186 8.62315e-05 3.5 0L12.834 0.000976562ZM3.5 2.33398C3.1907 2.33407 2.8945 2.45707 2.67578 2.67578C2.45707 2.8945 2.33407 3.1907 2.33398 3.5V22.167C2.33407 22.4763 2.45707 22.7735 2.67578 22.9922C2.89443 23.2105 3.191 23.3339 3.5 23.334H17.5C17.8092 23.3339 18.1065 23.2108 18.3252 22.9922C18.5439 22.7735 18.6669 22.4763 18.667 22.167V9.33398H14C13.3815 9.3339 12.788 9.08759 12.3506 8.65039C11.9131 8.21288 11.6671 7.61872 11.667 7V2.33398H3.5ZM15.167 17.5C15.8112 17.5002 16.334 18.0228 16.334 18.667C16.3338 19.3111 15.8111 19.8338 15.167 19.834H5.83398C5.18976 19.834 4.66717 19.3112 4.66699 18.667C4.66699 18.0227 5.18965 17.5 5.83398 17.5H15.167ZM15.167 12.834C15.8111 12.8342 16.3338 13.3559 16.334 14C16.3338 14.6441 15.8111 15.1668 15.167 15.167H5.83398C5.18976 15.167 4.66717 14.6442 4.66699 14C4.66717 13.3558 5.18976 12.834 5.83398 12.834H15.167ZM8.16699 8.16699C8.81118 8.16717 9.33398 8.68976 9.33398 9.33398C9.33364 9.97791 8.81096 10.4998 8.16699 10.5H5.83398C5.18987 10.5 4.66734 9.97802 4.66699 9.33398C4.66699 8.68965 5.18965 8.16699 5.83398 8.16699H8.16699ZM14 7H18.1807L14 2.81836V7Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Button>
            <Button
              variant={"ghost"}
              size={"md"}
              className={"text-content-brand-light hover:text-content-brand-light"}
            >
              <span className="flex items-center justify-center w-6 md:w-7 h-6 md:h-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.5182 2.34358C21.8385 2.38688 22.1361 2.52731 22.3756 2.74202C22.5603 2.89306 22.7113 3.08068 22.8161 3.29475L22.8629 3.39924L22.8883 3.46956L26.7741 15.1365L26.776 15.1424C26.9165 15.5721 26.9068 16.0372 26.7487 16.4608C26.601 16.8562 26.3307 17.1924 25.9801 17.4246L14.6754 25.451C14.2716 25.7377 13.7312 25.7379 13.3268 25.452L1.97524 17.4256L1.96547 17.4188C1.6166 17.1668 1.35642 16.8105 1.22329 16.4012C1.0903 15.9922 1.0906 15.5512 1.22426 15.1424L1.22719 15.1336L5.15883 3.42073C5.1665 3.39789 5.17516 3.37468 5.18422 3.35237C5.29931 3.06936 5.49097 2.82358 5.73696 2.64241L5.76137 2.62483C6.0404 2.43036 6.37352 2.32957 6.71352 2.33479C7.02746 2.33222 7.33497 2.41913 7.59829 2.5887L7.71938 2.67463L7.85024 2.79377C8.02201 2.97643 8.14667 3.19667 8.22133 3.43538L8.22329 3.4344L10.5475 10.4061H17.4567L19.8248 3.41682L19.8493 3.35237C19.9643 3.06937 20.156 2.82359 20.402 2.64241L20.4264 2.62483C20.7065 2.42961 21.0411 2.32775 21.3825 2.33381C21.4276 2.33462 21.4734 2.33754 21.5182 2.34358ZM3.51235 15.6551L13.9977 23.0701L24.4782 15.6287L21.3414 6.21077L19.3981 11.9481C19.2375 12.4213 18.7934 12.74 18.2936 12.7401H9.70668C9.20462 12.74 8.75907 12.4185 8.60024 11.9422L6.68618 6.20002L3.51235 15.6551Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Button>
            <Button
              variant={"ghost"}
              size={"md"}
              className={"text-content-brand-light hover:text-content-brand-light"}
            >
              <span className="flex items-center justify-center w-6 md:w-7 h-6 md:h-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21}
                  height={19}
                  viewBox="0 0 21 19"
                  fill="none"
                >
                  <path
                    d="M10.7666 5.81445L15.8545 0H18.9434L12.1973 7.70898L20.1338 18.2002H13.9209L9.05176 11.8389L3.48633 18.2002H0.393555L7.60742 9.95312L0 0H6.36914L10.7666 5.81445ZM14.7695 16.3535H16.4805L5.4375 1.75H3.60059L14.7695 16.3535Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>

        {/* <!-- Bottom Actions --> */}
        <div className="px-4 md:px-6 py-4 md:py-6">
          <div className="grid grid-cols-2 gap-4">
            <ShareDialog />
            <ReportDialog />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DappSidebar