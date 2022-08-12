import { useState } from "react"

export {}

const order = [
  { id: 1, name: 'Recent', current: true },
  { id: 2, name: 'Oldest', current: false },
]
const [selectedOrder, setSelectedOrder] = useState(order[1])

const status = [
  { id: 1, name: 'All', current: true },
  { id: 2, name: 'Public', current: false },
  { id: 3, name: 'Hidden', current: false },
]

{
  /* <header className="py-4 md:py-7">
  <div className="flex gap-3 flex-wrap items-center justify-between">
    <div className="flex items-baseline space-x-4">
      {status.map((item) => (
        <button
          key={item.name}
          className={classNames(
            item.current
              ? 'bg-gray-200 text-gray-900'
              : 'text-gray-500 hover:bg-gray-200 hover:text-gray-900',
            'px-3 py-2 rounded-md text-sm font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </button>
      ))}
    </div>

    <div className="flex items-center gap-2">
      <Listbox value={selectedOrder} onChange={setSelectedOrder}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              Order
            </Listbox.Label>

            <div className="relative">
              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm">
                <span className="flex items-center truncate">
                  {selectedOrder.name}
                </span>

                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {order.map((item) => (
                    <Listbox.Option
                      key={item.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-gray-100' : '',
                          'text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={item}
                    >
                      {({ selected }) => (
                        <span
                          className={classNames(
                            selected ? 'font-bold' : 'font-normal',
                            'block'
                          )}
                        >
                          {item.name}
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  </div>
</header> */
}
