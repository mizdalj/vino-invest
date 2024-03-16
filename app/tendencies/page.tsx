import TendenciesWineCard from "@/components/dashboard/tendencies-wine-card";
export default function Page() {

  return (
    <div className="flex min-h-screen justify-center">
      <div className="z-10 w-full max-w-[90%] px-12 xl:px-0">
        <TendenciesWineCard/>
      </div>
    </div>
  )
}
