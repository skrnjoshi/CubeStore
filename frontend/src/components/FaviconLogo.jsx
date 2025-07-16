const FaviconLogo = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="fav-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4facfe", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#00f2fe", stopOpacity: 1 }}
          />
        </linearGradient>

        <linearGradient id="fav-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#43e97b", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#38f9d7", stopOpacity: 1 }}
          />
        </linearGradient>

        <linearGradient id="fav-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#fa709a", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#fee140", stopOpacity: 1 }}
          />
        </linearGradient>

        <linearGradient id="fav-grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#f093fb", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#f5576c", stopOpacity: 1 }}
          />
        </linearGradient>

        <filter id="fav-shadow">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Simplified cube icon for favicon - 4 colorful squares */}
      <rect
        x="4"
        y="4"
        width="12"
        height="12"
        fill="url(#fav-grad1)"
        rx="2"
        filter="url(#fav-shadow)"
      />
      <rect
        x="16"
        y="4"
        width="12"
        height="12"
        fill="url(#fav-grad2)"
        rx="2"
        filter="url(#fav-shadow)"
      />
      <rect
        x="4"
        y="16"
        width="12"
        height="12"
        fill="url(#fav-grad3)"
        rx="2"
        filter="url(#fav-shadow)"
      />
      <rect
        x="16"
        y="16"
        width="12"
        height="12"
        fill="url(#fav-grad4)"
        rx="2"
        filter="url(#fav-shadow)"
      />
    </svg>
  );
};

export default FaviconLogo;
