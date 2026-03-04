import DappDetailsContent from "@/components/dapp-details/DappDetailsContent"
import DappSidebar from "@/components/dapp-details/DappSidebar"
import SimilarDapps from "@/components/dapp-details/SimilarDapps"

const page = () => {
  return (
    <main className="space-y-10 md:space-y-12 lg:space-y-18 pt-4 md:pt-8 xl:pt-14 pb-8 md:pb-12 xl:pb-25">
      {/* Details Content */}
      <section className="px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-6 xl:gap-10">
            <DappSidebar />
            <DappDetailsContent />
          </div>
        </div>
      </section>

      {/* Similar Dapp */}
      <section className="px-4">
        <div className="container mx-auto">
          <SimilarDapps />
        </div>
      </section>
    </main>
  )
}

export default page