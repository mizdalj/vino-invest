import WineCharts from "@/components/wine/Charts";


export default function Page({params}: { params: { id: string } }) {
  console.log(params)
  return (
    <div className="flex min-h-screen justify-center">
      <div className="z-10 w-full max-w-[90%] px-12 xl:px-0">
        <WineCharts wineId={params.id}/>
      </div>
    </div>
  )
}
