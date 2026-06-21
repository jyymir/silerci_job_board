import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className="min-h-screen bg-[rgb(249,247,247)]">
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-12">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[rgb(17,45,78)]">Create an account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" class="space-y-6">
            <div>
              <label for="name" class="block text-sm/6 font-medium text-[rgb(17,45,78)]">Name</label>
              <div class="mt-2">
                <input id="name" type="text" name="name" required autocomplete="name" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 border-2" />
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm/6 font-medium text-[rgb(17,45,78)]">Email address</label>
              <div class="mt-2">
                <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 border-2" />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm/6 font-medium text-[rgb(17,45,78)]">Password</label>
              </div>
              <div class="mt-2">
                <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 border-2" />
              </div>
            </div>
            <div class="flex items-center justify-center p-8">
            <div class="relative flex w-64 items-center rounded-full bg-gray-200 p-1">
              <div class="absolute left-1 h-8 w-1/2 rounded-full bg-white shadow transition-all duration-300 ease-in-out"></div>
              
              <button class="relative z-10 w-1/2 py-1 text-sm font-medium text-gray-800">Individual</button>
              <button class="relative z-10 w-1/2 py-1 text-sm font-medium text-gray-500">Company</button>
            </div>
          </div>


            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-[rgb(17,45,78)] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[rgb(25,86,155)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm/6 text-gray-400">
            Already have an account?
            <a href="/login" class="font-semibold text-[rgb(25,86,155)] hover:text-indigo-300">  Sign in</a>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp