export const ThemeConstant = {
  hidden: `hidden`,
  block: `block`,
  cursor: {
    disabledNotAllowed: `disabled:cursor-not-allowed`,
  },
  bg: {
    red: `bg-red-500`,
    orange: `bg-orange-500`,
    green: `bg-green-500`,
  },
  sidebar: {
    nav: `md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6`,
    container: `md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto`,
    button: `cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent`,
    title: `md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0`,
    open: `bg-white m-2 py-3 px-6`,
    dropdown: {
      ul: `md:hidden items-center flex flex-wrap list-none`,
      li: `inline-block relative`,
    },
    menu: {
      wrapper: `md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded`,
      container: `md:min-w-full md:hidden flex flex-wrap justify-between pb-4 mb-4`,
      hr: `my-4 md:min-w-full`,
      h6: `md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline`,
      ul: `md:flex-col md:min-w-full flex flex-col list-none`,
    },
    link: {
      li: `items-center`,
      a: {
        base: `text-xs uppercase py-3 font-bold block`,
        active: `text-blue-500 hover:text-blue-600`,
        normal: `text-gray-700 hover:text-gray-500`,
      },
      icon: {
        base: `mr-2 text-sm`,
        active: `opacity-75`,
        normal: `text-gray-300`,
      },
    },
  },
  footer: {
    wrapper: `block py-4 px-4 container`,
    hr: `mb-4 border-b-1 border-gray-200`,
    container: `flex flex-wrap items-center md:justify-between justify-center`,
    left: `w-full md:w-4/12 px-4 text-sm text-gray-500 font-semibold py-1 text-center md:text-left`,
    right: `w-full md:w-8/12 px-4`,
  },
  navbar: {
    wrapper: `absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4`,
    container: `w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4`,
    title: `text-white text-sm uppercase hidden lg:inline-block font-semibold`,
    ul: `flex-col md:flex-row list-none items-center hidden md:flex`,
  },
  container: {
    header: `relative bg-capsule-blue md:pt-32 pb-32 pt-12 px-4 md:px-10 `,
    main: `relative md:ml-64`,
    content: `px-4 md:px-10 mx-auto w-full -m-24`,
  },
  card: {
    stat: {
      container: `relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg p-4`,
      header: {
        container: `flex flex-wrap`,
        title: {
          container: `w-full pr-4 max-w-full flex-1`,
          subTitle: `text-gray-400 uppercase font-bold text-xs`,
          content: `font-semibold text-xl text-gray-700`,
        },
        icon: {
          container: `text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full`,
        },
      },
      description: {
        container: `text-sm text-gray-400 mt-4`,
        icon: `mr-1`,
        content: `whitespace-nowrap`,
        span: `mr-2`,
      },
    },
    common: `flex flex-col bg-white rounded shadow-lg p-4`,
  },
  table: {
    wrapper: `relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white`,
    title: {
      container: `rounded-t mb-0 px-8 py-3 border-0`,
      content: `font-semibold text-lg text-capsule-blue`,
    },
    container: `block w-full overflow-x-auto`,
    content: `items-center w-full bg-transparent border-collapse`,
    cell: {
      header: `px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100`,
      content: `border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4`,
    },
  },
  dropdown: {
    button: `text-gray-500 block`,
    container: `bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48`,
  },
  progressBar: {
    wrapper: `flex items-center`,
    text: `mr-2`,
    container: `relative w-full`,
    bar: `overflow-hidden h-2 text-xs flex rounded bg-opacity-50`,
    barHover: `shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`,
  },
  dot: `text-emerald-500 mr-2`,
  form: {
    group: {
      common: `block space-y-2`,
      checkbox: null,
      radio: null,
    },
    label: {
      common: `block uppercase text-gray-600 text-xs font-bold mb-2`,
      checkbox: `text-gray-600 flex items-center space-x-2 uppercase`,
      radio: `text-gray-600 flex items-center space-x-2 uppercase`,
      error: `ml-2 font-bold text-red-600 text-xs`,
    },
    input: {
      common: {
        base: `border-1 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full focus:ring-capsule-blue ease-linear transition-all duration-150 border-transparent`,
        invalid: `border-1 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full focus:ring-red-500 ease-linear transition-all duration-150 border-red-500`,
      },
      radio: {
        base: [
          `text-black`,
          `focus:border-capsule-blue`,
          `focus:ring-capsule-blue`,
        ],
        invalid: [
          `text-black`,
          `border-red-500`,
          `focus:border-red-500`,
          `focus:ring-red-500`,
        ],
      },
      checkbox: {
        base: [
          `text-black`,
          `focus:border-capsule-blue`,
          `focus:ring-capsule-blue`,
          `focus:ring-1`,
          `rounded`,
        ],
        invalid: [
          `text-black`,
          `border-red-500`,
          `focus:border-red-500`,
          `focus:ring-red-500`,
          `focus:ring-1`,
          `rounded`,
        ],
      },
    },
  },
  button: {
    common: `focus:ring-4 font-medium rounded text-sm px-5 py-2 text-center transform hover:scale-95 ease-linear transition-all duration-150 disabled:cursor-not-allowed disabled:transform-none disabled:opacity-50`,
    color: {
      red: `text-white bg-red-500`,
      blue: `text-white bg-capsule-blue`,
      green: `text-white bg-green-500`,
    },
  },
};
