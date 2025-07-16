const Logo = ({ width = "200", height = "80" }) => {
  return (
    <svg
      viewBox="0 0 200 80"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4facfe", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#00f2fe", stopOpacity: 1 }}
          />
        </linearGradient>

        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#43e97b", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#38f9d7", stopOpacity: 1 }}
          />
        </linearGradient>

        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#fa709a", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#fee140", stopOpacity: 1 }}
          />
        </linearGradient>

        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#f093fb", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#f5576c", stopOpacity: 1 }}
          />
        </linearGradient>

        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Cube icon with 4 colorful squares */}
      <rect
        x="10"
        y="10"
        width="25"
        height="25"
        fill="url(#grad1)"
        rx="3"
        filter="url(#shadow)"
      />
      <rect
        x="40"
        y="10"
        width="25"
        height="25"
        fill="url(#grad2)"
        rx="3"
        filter="url(#shadow)"
      />
      <rect
        x="10"
        y="40"
        width="25"
        height="25"
        fill="url(#grad3)"
        rx="3"
        filter="url(#shadow)"
      />
      <rect
        x="40"
        y="40"
        width="25"
        height="25"
        fill="url(#grad4)"
        rx="3"
        filter="url(#shadow)"
      />

      {/* Company name */}
      <text
        x="80"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="900"
        fill="#1a202c"
      >
        CubeStore
      </text>

      {/* Tagline */}
      <text
        x="80"
        y="55"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fill="#ffffff"
      >
        Modular Shopping
      </text>
    </svg>
  );
};

export default Logo;
