import { Fragment, useState,useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CustomDropDown(props) {

// Initialize with selected value if provided
  const [selectedName, setSelectedName] = useState(props.name || ''); 
 

  const handleOptionSelect = (option) => {
    setSelectedName(option);
    // Notify the parent component about the selected option
    props.onSelect(option); 
  };
  

  return (
    <Menu as="div" className="relative inline-block text-left w-[350px] ">
      <div>
        <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-[#F5F6F7] px-3 py-3 text-sm font-semibold text-[#707070] shadow-sm   hover:bg-gray-50">
          {selectedName}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-[#707070] " aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {props.options.map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={() => handleOptionSelect(option)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {option}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
