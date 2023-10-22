import MySlots from "@/components/my-slots";

export default function AppointmentHome() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 gap-4">
      <div className="grow-0 shrink-0">
        {/* 
        Hero message 
      */}
        <span className="text-xl font-extrabold">Welcome to my clinic</span>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 bg-white rounded-lg p-2 justify-center items-center gap-2">
        <div className="text-gray-800 ">
          <span className="font-bold">Book An appointment</span>
        </div>
        <MySlots></MySlots>
      </div>
    </main>
  );
}
