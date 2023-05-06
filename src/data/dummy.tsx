import { FiShoppingBag, FiUsers } from "react-icons/fi";
import { SiConvertio } from "react-icons/si";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsKanban } from "react-icons/bs";
import { BiMoney, BiMap } from "react-icons/bi";

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'overview',
                icon: <FiShoppingBag />,
            },
            {
                name: 'conversion',
                icon: <SiConvertio />,
            }
        ],
    },
    {
        title: 'Pages',
        links: [

            {
                name: 'employees',
                icon: <IoMdContacts />,
            },
            {
                name: 'customers',
                icon: <RiContactsLine />,
            },
        ],
    },
    {
        title: 'Apps',
        links: [
            {
                name: 'calendar',
                icon: <AiOutlineCalendar />,
            },
            {
                name: 'kanban',
                icon: <BsKanban />,
            },
        ],
    },
    {
        title: 'Analysis',
        links: [
            {
                name: 'profitAnalysis',
                icon: <BiMoney />,
            },
            {
                name: 'usersAnalysis',
                icon: <FiUsers />,
            },
            {
                name: 'distribution',
                icon: <BiMap />,
            },
        ],
    },
];