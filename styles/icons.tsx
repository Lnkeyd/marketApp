export const ArrowIcon = () => (
    <svg
      width={43}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={0.3} stroke="#2E2E33" strokeWidth={2} strokeLinecap="round">
        <path d="m33 1 8 8-8 8M1 9h40" />
      </g>
    </svg>
)

export const FavouriteIcon = ({isOutlined = false}) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={20} cy={20} r={19.5} stroke={isOutlined ? '#FF0000' : '#999'} />
    <path
      d="M20 18a4 4 0 0 0-8 0c0 4 6 8 8 10"
      stroke={isOutlined ? '#FF0000' : '#999'}
      strokeLinecap="round"
    />
    <path d="M20.277 24c1.035-.885 2.19-1.903 3.19-3" stroke={isOutlined ? '#FF0000' : '#999'} />
    <path
      d="M19.646 27.646a.5.5 0 0 0 .708.708l-.708-.708ZM27.5 18c0 .875-.33 1.784-.895 2.707-.565.922-1.348 1.828-2.209 2.69-.86.86-1.784 1.66-2.627 2.379-.832.709-1.604 1.352-2.123 1.87l.708.708c.481-.482 1.209-1.089 2.064-1.817.845-.72 1.795-1.543 2.686-2.433.889-.89 1.731-1.858 2.354-2.874.621-1.014 1.042-2.105 1.042-3.23h-1ZM24 14.5a3.5 3.5 0 0 1 3.5 3.5h1a4.5 4.5 0 0 0-4.5-4.5v1Zm-2.315.875A3.485 3.485 0 0 1 24 14.5v-1c-1.14 0-2.184.425-2.977 1.125l.662.75Z"
      fill={isOutlined ? '#FF0000' : '#999'}
    />
  </svg>
)

export const StarIcon = ({isFilled = false}) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7 0 1.619 5.124L14 5.087 9.622 8.214l1.701 5.096L7 10.118 2.677 13.31l1.701-5.096L0 5.087l5.381.037L7 0Z"
      fill={isFilled ? '#F26A61' : '#E9E9EB'}
    />
  </svg>
)

export const MinusIcon = () => (
  <svg
    width={10}
    height={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path opacity={0.3} fill="#2E2E33" d="M0 0h10v2H0z" />
  </svg>
)

export const PlusIcon = () => (
  <svg
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity={0.3} fill="#2E2E33">
      <path d="M0 4h10v2H0z" />
      <path d="M6 0v10H4V0z" />
    </g>
  </svg>
)

