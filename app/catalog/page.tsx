import dynamic from 'next/dynamic';

const WineTable = dynamic(
  () => import('@/components/dashboard/wine-table'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="z-10 w-full max-w-[90%] px-12 xl:px-0">
        <WineTable />
      </div>
    </div>
  );
}
