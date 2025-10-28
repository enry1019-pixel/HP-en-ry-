export function RedThreadBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden max-h-[calc(100vh+200px)]">
      {/* Top flowing thread with natural knot */}
      <svg
        className="absolute top-10 left-0 w-full h-64 opacity-15"
        viewBox="0 0 1200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 150 
             Q 100 100, 200 150 
             Q 250 180, 300 160
             Q 315 152, 325 145
             C 330 140, 338 138, 345 142
             C 352 146, 355 154, 352 162
             C 349 170, 342 175, 334 175
             C 326 175, 319 170, 316 162
             C 314 156, 315 150, 320 146
             Q 328 142, 338 145
             Q 350 150, 365 155
             Q 400 165, 430 160
             Q 500 140, 600 150
             Q 700 160, 800 150
             Q 900 140, 1000 150
             Q 1100 160, 1200 150"
          stroke="#B91C1C"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Bottom flowing thread with natural knot */}
      <svg
        className="absolute bottom-40 left-0 w-full h-64 opacity-15"
        style={{ clipPath: "inset(0 0 20% 0)" }}
        viewBox="0 0 1200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 150
             Q 80 170, 160 150
             Q 240 130, 320 150
             Q 370 165, 400 160
             Q 415 155, 423 150
             C 428 146, 435 144, 442 147
             C 449 150, 453 157, 452 165
             C 451 173, 445 179, 437 180
             C 429 181, 422 177, 418 170
             C 415 164, 415 157, 419 152
             Q 425 147, 433 148
             Q 445 150, 460 155
             Q 500 165, 550 155
             Q 650 140, 750 150
             Q 850 160, 950 150
             Q 1050 140, 1150 150
             Q 1175 155, 1200 150"
          stroke="#B91C1C"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
