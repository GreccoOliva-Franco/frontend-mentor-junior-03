export default function Loading() {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
          <div className='grid grid-cols place-content-center size-10 border-4 rounded-full border-gray-400 border-t-white animate-spin'>
            <div className='size-7 border-4 rounded-full border-gray-400 border-t-white animate-spin'>
            </div>
          </div>
        </div>
    );
}