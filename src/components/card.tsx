import { CustomInput, CustomSelect } from './custom'

export const Card = () => {
  return (
    <section className="h-96 w-full max-w-[30rem] rounded-3xl border border-solid border-blue-500 bg-blue-300 py-20">
      <form className="mx-auto flex w-full max-w-[22rem] flex-col gap-12">
        <div className="flex flex-col gap-5">
          <CustomInput />
          <CustomSelect />
        </div>
      </form>
    </section>
  )
}
