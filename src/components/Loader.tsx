import styled from 'styled-components';

const Loader = ({ fading }: { fading: boolean }) => {
  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        {/* Company Logo */}
        <div className="mb-8">
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
          >
            {/* Stylized R Logo */}
            <path 
              d="M30 85 L30 35 C30 20 45 15 60 15 C75 15 85 25 85 40 C85 55 75 60 65 62 L85 85 L70 85 L52 62 L45 62 L45 85 Z M45 50 L55 50 C65 50 70 45 70 40 C70 35 65 30 55 30 L45 30 Z" 
              fill="#2563EB"
              strokeWidth="0"
            />
            {/* Decorative swoosh */}
            <path 
              d="M20 25 Q35 5, 70 10 Q85 12, 90 25" 
              stroke="#2563EB" 
              strokeWidth="4" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Honeycomb Loader */}
        <StyledWrapper>
          <div className="honeycomb">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </StyledWrapper>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  @keyframes honeycomb {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
      transform: scale(0);
    }

    30%,
    70% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .honeycomb {
    height: 24px;
    position: relative;
    width: 24px;
    transform: scale(2.5);
  }

  .honeycomb div {
    animation: honeycomb 2.1s infinite backwards;
    background: #2563EB;
    height: 12px;
    margin-top: 6px;
    position: absolute;
    width: 24px;
  }

  .honeycomb div:after,
  .honeycomb div:before {
    content: '';
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    position: absolute;
    left: 0;
    right: 0;
  }

  .honeycomb div:after {
    top: -6px;
    border-bottom: 6px solid #2563EB;
  }

  .honeycomb div:before {
    bottom: -6px;
    border-top: 6px solid #2563EB;
  }

  .honeycomb div:nth-child(1) {
    animation-delay: 0s;
    left: -28px;
    top: 0;
  }

  .honeycomb div:nth-child(2) {
    animation-delay: 0.1s;
    left: -14px;
    top: 22px;
  }

  .honeycomb div:nth-child(3) {
    animation-delay: 0.2s;
    left: 14px;
    top: 22px;
  }

  .honeycomb div:nth-child(4) {
    animation-delay: 0.3s;
    left: 28px;
    top: 0;
  }

  .honeycomb div:nth-child(5) {
    animation-delay: 0.4s;
    left: 14px;
    top: -22px;
  }

  .honeycomb div:nth-child(6) {
    animation-delay: 0.5s;
    left: -14px;
    top: -22px;
  }

  .honeycomb div:nth-child(7) {
    animation-delay: 0.6s;
    left: 0;
    top: 0;
  }
`;

export default Loader;
