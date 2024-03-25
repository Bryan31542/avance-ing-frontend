const RoleCard = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center flex-wrap justify-center w-max mb-6 px-20 h-20 bg-white rounded-full gap-20 drop-shadow-card">
      <div className="flex items-center justify-center gap-10">
        <p className="text-lg font-bold text-black font-dm-sans w-40 text-center">
          {name}
        </p>
      </div>
    </div>
  )
}

export default RoleCard
