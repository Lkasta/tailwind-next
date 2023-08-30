import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://avatars.githubusercontent.com/u/105897473?v=4"
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-semibold text-sm text-zinc-700">Lkasta</span>
        <span
          title="dffgdfgffdvdlkasta@lkasta.com"
          className="truncate text-sm text-zinc-500"
        >
          dffgdfgffdvdlkasta@lkasta.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded p-2 hover:bg-zinc-100">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
