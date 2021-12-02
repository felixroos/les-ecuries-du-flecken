import { useLocales } from '../pages/api/useLocales';

export default function Contact() {
  const [fr, de] = useLocales();
  return (
    <form className="space-y-8">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            {/* <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3> */}
            {/* <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p> */}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-base font-medium text-gray-300">
                {de && 'E-'}Mail
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="email"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="about" className="block text-base text-gray-300">
                {de && 'Nachricht'}
                {fr && 'Message'}
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {de && 'Absenden'}
          {fr && 'Envoyer'}
        </button>
      </div>
    </form>
  );
}
