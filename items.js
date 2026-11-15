// Each item is one isolated photo. Add a new "set" (e.g. "Engines") and it shows up as a filter.
// focus: [x%, y%] to zoom on, defaults to the centre.
window.ITEMS = [
 {
  "name": "Spark plug",
  "set": "Cars",
  "img": "images/spark-plug.jpg",
  "fact": "Fires the fuel-air mix in each cylinder with a tiny electric arc.",
  "aspect": 1,
  "box": [
   42.4,
   47.8,
   15.8,
   15.6
  ]
 },
 {
  "name": "Alternator",
  "set": "Cars",
  "img": "images/alternator.jpg",
  "fact": "Spun by the engine belt, it charges the battery and powers the electrics.",
  "aspect": 1.332,
  "box": [
   12,
   10.7,
   73.5,
   76.8
  ]
 },
 {
  "name": "Brake caliper",
  "set": "Cars",
  "img": "images/brake-caliper.jpg",
  "fact": "Squeezes brake pads against the spinning rotor to stop the wheel.",
  "aspect": 1,
  "box": [
   14.9,
   25.5,
   76.2,
   50.7
  ]
 },
 {
  "name": "Brake rotor",
  "set": "Cars",
  "img": "images/brake-rotor.jpg",
  "fact": "The disc the brake pads clamp onto; it spins with the wheel.",
  "aspect": 1,
  "box": [
   18,
   26.4,
   62.9,
   50.4
  ]
 },
 {
  "name": "Radiator",
  "set": "Cars",
  "img": "images/radiator.jpg",
  "fact": "Sheds engine heat into the air passing through its thin fins.",
  "aspect": 1,
  "box": [
   5.1,
   12.7,
   91.3,
   76.7
  ]
 },
 {
  "name": "Turbocharger",
  "set": "Cars",
  "img": "images/turbocharger.jpg",
  "fact": "Exhaust spins a turbine that crams extra air into the engine.",
  "aspect": 1,
  "box": [
   27.2,
   12.6,
   57.2,
   70.4
  ]
 },
 {
  "name": "Air filter",
  "set": "Cars",
  "img": "images/air-filter.jpg",
  "fact": "Stops dust and grit from being sucked into the engine.",
  "aspect": 1,
  "box": [
   4.9,
   22.2,
   92.5,
   59.8
  ]
 },
 {
  "name": "Timing belt",
  "set": "Cars",
  "img": "images/timing-belt.jpg",
  "fact": "Toothed belt that keeps the camshaft in step with the crankshaft.",
  "aspect": 1.692,
  "box": [
   7.6,
   11.4,
   83.8,
   71.4
  ]
 },
 {
  "name": "Camshaft",
  "set": "Cars",
  "img": "images/camshaft.jpg",
  "fact": "Its lobes push the valves open at exactly the right moment.",
  "aspect": 1,
  "box": [
   0,
   10.5,
   100,
   75.3
  ]
 },
 {
  "name": "Crankshaft",
  "set": "Cars",
  "img": "images/crankshaft.jpg",
  "fact": "Turns the pistons' up-and-down motion into spinning motion.",
  "aspect": 1,
  "box": [
   22.3,
   30.8,
   64.3,
   35.5
  ]
 },
 {
  "name": "Piston",
  "set": "Cars",
  "img": "images/piston.jpg",
  "fact": "Pushed down by burning fuel, it drives the crankshaft through its rod.",
  "aspect": 1,
  "box": [
   19.8,
   16.3,
   58,
   69.3
  ]
 },
 {
  "name": "Fuel injector",
  "set": "Cars",
  "img": "images/fuel-injector.jpg",
  "fact": "Sprays a fine mist of fuel into the engine, controlled by the computer.",
  "aspect": 1,
  "box": [
   1.1,
   1.8,
   91.3,
   94.9
  ]
 },
 {
  "name": "CV axle",
  "set": "Cars",
  "img": "images/cv-axle.jpg",
  "fact": "Carries power from the gearbox to a front wheel while it steers and bounces.",
  "aspect": 1,
  "box": [
   23.1,
   18.5,
   57.5,
   63.1
  ]
 },
 {
  "name": "Shock absorber",
  "set": "Cars",
  "img": "images/shock-absorber.jpg",
  "fact": "Damps the spring so the car doesn't keep bouncing after a bump.",
  "aspect": 1,
  "box": [
   26.4,
   24.8,
   53.8,
   49.8
  ]
 },
 {
  "name": "Exhaust manifold",
  "set": "Cars",
  "img": "images/exhaust-manifold.jpg",
  "fact": "Collects exhaust from each cylinder into one pipe.",
  "aspect": 1,
  "box": [
   4.4,
   19.1,
   92.7,
   65.6
  ]
 },
 {
  "name": "Oil filter",
  "set": "Cars",
  "img": "images/oil-filter.jpg",
  "fact": "Catches grit and metal bits before oil goes back round the engine.",
  "aspect": 1.136,
  "box": [
   10.8,
   14.3,
   73.4,
   74.1
  ]
 },
 {
  "name": "Starter motor",
  "set": "Cars",
  "img": "images/starter-motor.jpg",
  "fact": "An electric motor that cranks the engine to get it running.",
  "aspect": 1.02,
  "box": [
   15.6,
   10,
   74.9,
   76.6
  ]
 },
 {
  "name": "Distributor cap",
  "set": "Cars",
  "img": "images/distributor-cap.jpg",
  "fact": "Sends the spark to each cylinder in turn on older engines.",
  "aspect": 1,
  "box": [
   19,
   17.8,
   62.5,
   62.5
  ]
 },
 {
  "name": "Carburetor",
  "set": "Cars",
  "img": "images/carburetor.jpg",
  "fact": "Mixes fuel into incoming air, the job injectors do in modern cars.",
  "aspect": 1,
  "box": [
   16.4,
   4,
   64,
   77.6
  ]
 },
 {
  "name": "Clutch disc",
  "set": "Cars",
  "img": "images/clutch-disc.jpg",
  "fact": "Grips the flywheel so engine power reaches the gearbox.",
  "aspect": 1,
  "box": [
   8.5,
   9.8,
   83.5,
   81.6
  ]
 },
 {
  "name": "Catalytic converter",
  "set": "Cars",
  "img": "images/catalytic-converter.jpg",
  "fact": "A honeycomb coated in precious metals that cleans exhaust gas.",
  "aspect": 1.005,
  "box": [
   9.3,
   8.4,
   84.2,
   81.5
  ]
 },
 {
  "name": "Ignition coil",
  "set": "Cars",
  "img": "images/ignition-coil.jpg",
  "fact": "Turns 12 volts into the tens of thousands a spark plug needs.",
  "aspect": 1,
  "box": [
   12.5,
   23.1,
   80.5,
   56
  ]
 },
 {
  "name": "Water pump",
  "set": "Cars",
  "img": "images/water-pump.jpg",
  "fact": "Pushes coolant round the engine and radiator.",
  "aspect": 1,
  "box": [
   16.8,
   24.8,
   55.8,
   57.4
  ]
 },
 {
  "name": "Serpentine belt",
  "set": "Cars",
  "img": "images/serpentine-belt.jpg",
  "fact": "One long ribbed belt that drives the alternator, AC and power steering.",
  "aspect": 1,
  "box": [
   2.7,
   4,
   95.5,
   92.5
  ]
 },
 {
  "name": "Wheel hub",
  "set": "Cars",
  "img": "images/wheel-hub.jpg",
  "fact": "Holds the wheel on its bearing so it spins smoothly.",
  "aspect": 1,
  "box": [
   14.2,
   12.4,
   74.9,
   83.1
  ]
 },
 {
  "name": "Thermostat",
  "set": "Cars",
  "img": "images/thermostat.jpg",
  "fact": "A wax valve that keeps coolant in the engine until it warms up.",
  "aspect": 0.94,
  "box": [
   11.5,
   15.7,
   75.5,
   74.9
  ]
 },
 {
  "name": "Brake pads",
  "set": "Cars",
  "img": "images/brake-pads.jpg",
  "fact": "The friction blocks that rub on the rotor when you brake.",
  "aspect": 1.497,
  "box": [
   16.4,
   18.4,
   64.4,
   60.2
  ]
 },
 {
  "name": "Oxygen sensor",
  "set": "Cars",
  "img": "images/oxygen-sensor.jpg",
  "fact": "Sniffs the exhaust so the computer can tune the fuel mix.",
  "aspect": 1,
  "box": [
   57.5,
   50.7,
   0.4,
   13.6
  ]
 },
 {
  "name": "Muffler",
  "set": "Cars",
  "img": "images/muffler.jpg",
  "fact": "Quiets the exhaust with chambers and baffles.",
  "aspect": 1.118,
  "box": [
   27.8,
   5.3,
   66.2,
   89.2
  ]
 },
 {
  "name": "Tie rod end",
  "set": "Cars",
  "img": "images/tie-rod-end.jpg",
  "fact": "The ball joint linking the steering rack to the wheel.",
  "aspect": 1,
  "box": [
   1.8,
   6.9,
   93.5,
   83.6
  ]
 },
 {
  "name": "Ratchet",
  "set": "Tools",
  "img": "images/ratchet.jpg",
  "fact": "Turns a socket back and forth without lifting it off the bolt.",
  "aspect": 1,
  "box": [
   14.4,
   27.8,
   77.3,
   49.8
  ]
 },
 {
  "name": "Torque wrench",
  "set": "Tools",
  "img": "images/torque-wrench.jpg",
  "fact": "Clicks when a bolt reaches exactly the right tightness.",
  "aspect": 1,
  "box": [
   3.8,
   9.3,
   92.2,
   58.4
  ]
 },
 {
  "name": "Adjustable wrench",
  "set": "Tools",
  "img": "images/adjustable-wrench.jpg",
  "fact": "One wrench whose jaw slides to fit many bolt sizes.",
  "aspect": 1
 },
 {
  "name": "Combination wrench",
  "set": "Tools",
  "img": "images/combination-wrench.jpg",
  "fact": "Open jaw on one end, closed ring on the other, same size.",
  "aspect": 1
 },
 {
  "name": "Locking pliers",
  "set": "Tools",
  "img": "images/locking-pliers.jpg",
  "fact": "Pliers that clamp shut and stay locked on their own.",
  "aspect": 1
 },
 {
  "name": "Needle-nose pliers",
  "set": "Tools",
  "img": "images/needle-nose-pliers.jpg",
  "fact": "Long thin jaws for reaching into tight spots.",
  "aspect": 1,
  "box": [
   41,
   43.2,
   5.8,
   7.2
  ]
 },
 {
  "name": "Claw hammer",
  "set": "Tools",
  "img": "images/claw-hammer.jpg",
  "fact": "Drives nails in, and the forked claw pulls them out.",
  "aspect": 1
 },
 {
  "name": "Phillips screwdriver",
  "set": "Tools",
  "img": "images/phillips-screwdriver.jpg",
  "fact": "Cross-shaped tip for the most common screws.",
  "aspect": 1,
  "box": [
   70.8,
   25.8,
   17.2,
   22
  ]
 },
 {
  "name": "Allen keys",
  "set": "Tools",
  "img": "images/allen-keys.jpg",
  "fact": "L-shaped hex bars for bolts with a six-sided hole.",
  "aspect": 0.795,
  "box": [
   7.1,
   5.1,
   87.3,
   89
  ]
 },
 {
  "name": "Tape measure",
  "set": "Tools",
  "img": "images/tape-measure.jpg",
  "fact": "A spring-loaded steel ribbon for measuring length.",
  "aspect": 1,
  "box": [
   4.7,
   13,
   48.3,
   65.7
  ]
 },
 {
  "name": "Spirit level",
  "set": "Tools",
  "img": "images/spirit-level.jpg",
  "fact": "A bubble in a vial shows when a surface is perfectly flat.",
  "aspect": 1
 },
 {
  "name": "Hacksaw",
  "set": "Tools",
  "img": "images/hacksaw.jpg",
  "fact": "A fine-toothed blade held tight in a frame, for cutting metal.",
  "aspect": 1,
  "box": [
   86.8,
   38.8,
   6.4,
   21.2
  ]
 },
 {
  "name": "Wire strippers",
  "set": "Tools",
  "img": "images/wire-strippers.jpg",
  "fact": "Strips the insulation off wire without cutting the copper.",
  "aspect": 1,
  "box": [
   34.2,
   25.6,
   31.8,
   67.2
  ]
 },
 {
  "name": "Vernier caliper",
  "set": "Tools",
  "img": "images/vernier-caliper.jpg",
  "fact": "Measures thickness and diameter to a fraction of a millimetre.",
  "aspect": 0.998,
  "box": [
   4.4,
   23.1,
   77.4,
   48.2
  ]
 },
 {
  "name": "Multimeter",
  "set": "Tools",
  "img": "images/multimeter.jpg",
  "fact": "Measures voltage, current and resistance in a circuit.",
  "aspect": 1,
  "box": [
   18,
   9.6,
   71.3,
   87.5
  ]
 },
 {
  "name": "Pipe wrench",
  "set": "Tools",
  "img": "images/pipe-wrench.jpg",
  "fact": "Serrated jaws bite into round pipe as you turn it.",
  "aspect": 1.04,
  "box": [
   11.1,
   3.6,
   38,
   33.3
  ]
 },
 {
  "name": "Chisel",
  "set": "Tools",
  "img": "images/chisel.jpg",
  "fact": "A sharp bevelled blade for carving and paring wood.",
  "aspect": 1,
  "box": [
   24.4,
   54.7,
   51.1,
   39.3
  ]
 },
 {
  "name": "Impact driver",
  "set": "Tools",
  "img": "images/impact-driver.jpg",
  "fact": "Hammers while it spins to drive long screws and bolts.",
  "aspect": 1,
  "box": [
   31.3,
   2.5,
   42.2,
   78.4
  ]
 },
 {
  "name": "Tin snips",
  "set": "Tools",
  "img": "images/tin-snips.jpg",
  "fact": "Scissors for cutting sheet metal.",
  "aspect": 0.874,
  "box": [
   36.7,
   27.5,
   44.2,
   51.5
  ]
 },
 {
  "name": "Socket set",
  "set": "Tools",
  "img": "images/socket-set.jpg",
  "fact": "Sockets in a row of sizes that snap onto a ratchet.",
  "aspect": 1.325,
  "box": [
   4.4,
   7.2,
   90.7,
   75.2
  ]
 },
 {
  "name": "Ball bearing",
  "set": "Parts",
  "img": "images/ball-bearing.jpg",
  "fact": "Steel balls rolling between two rings so a shaft spins freely.",
  "aspect": 1,
  "box": [
   16.6,
   9,
   72,
   81.6
  ]
 },
 {
  "name": "Spur gear",
  "set": "Parts",
  "img": "images/spur-gear.jpg",
  "fact": "A toothed wheel that meshes with another to pass on motion.",
  "aspect": 1,
  "box": [
   14.2,
   13.6,
   70.7,
   72.5
  ]
 },
 {
  "name": "Hex bolt and nut",
  "set": "Parts",
  "img": "images/hex-bolt-and-nut.jpg",
  "fact": "A threaded bolt and the nut that screws onto it.",
  "aspect": 1,
  "box": [
   18.6,
   22.4,
   68.4,
   66.6
  ]
 },
 {
  "name": "Compression spring",
  "set": "Parts",
  "img": "images/compression-spring.jpg",
  "fact": "A coil that pushes back when you squeeze it.",
  "aspect": 1,
  "box": [
   33.2,
   5.6,
   33.2,
   88.8
  ]
 },
 {
  "name": "Pulley",
  "set": "Parts",
  "img": "images/pulley.jpg",
  "fact": "A grooved wheel that a belt runs around.",
  "aspect": 1,
  "box": [
   11.8,
   2.5,
   69.5,
   90.9
  ]
 },
 {
  "name": "Roller chain",
  "set": "Parts",
  "img": "images/roller-chain.jpg",
  "fact": "Linked rollers that carry power between sprockets, like a bike chain.",
  "aspect": 1,
  "box": [
   0,
   0,
   95.8,
   92.8
  ]
 },
 {
  "name": "Sprocket",
  "set": "Parts",
  "img": "images/sprocket.jpg",
  "fact": "A toothed wheel that a roller chain wraps around.",
  "aspect": 1,
  "box": [
   28.1,
   23.8,
   65.5,
   62.6
  ]
 },
 {
  "name": "Washer",
  "set": "Parts",
  "img": "images/washer.jpg",
  "fact": "A flat ring that spreads the load under a nut or bolt head.",
  "aspect": 1
 },
 {
  "name": "Rivet",
  "set": "Parts",
  "img": "images/rivet.jpg",
  "fact": "Pulled tight to permanently join two sheets.",
  "aspect": 1,
  "box": [
   18.4,
   15.8,
   29.5,
   29.3
  ]
 },
 {
  "name": "Hinge",
  "set": "Parts",
  "img": "images/hinge.jpg",
  "fact": "Lets a door swing on its pin.",
  "aspect": 0.915,
  "box": [
   0.2,
   1.5,
   99.5,
   93.7
  ]
 },
 {
  "name": "Universal joint",
  "set": "Parts",
  "img": "images/universal-joint.jpg",
  "fact": "A cross-shaped joint that passes rotation around a bend.",
  "aspect": 1,
  "box": [
   7,
   19.1,
   71.3,
   73.2
  ]
 },
 {
  "name": "Cotter pin",
  "set": "Parts",
  "img": "images/cotter-pin.jpg",
  "fact": "A split pin that locks a nut or pin in place.",
  "aspect": 1,
  "box": [
   24.6,
   20.5,
   6,
   55.6
  ]
 },
 {
  "name": "Worm gear",
  "set": "Parts",
  "img": "images/worm-gear.jpg",
  "fact": "A screw turning a gear, for big slow-down and no back-drive.",
  "aspect": 1,
  "box": [
   16.7,
   13.7,
   68.7,
   72.3
  ]
 },
 {
  "name": "Ball valve",
  "set": "Parts",
  "img": "images/ball-valve.jpg",
  "fact": "A quarter turn of the handle opens or shuts the flow.",
  "aspect": 1.074,
  "box": [
   13.1,
   17.8,
   32.7,
   61.1
  ]
 },
 {
  "name": "Hose clamp",
  "set": "Parts",
  "img": "images/hose-clamp.jpg",
  "fact": "A band that screws tight to seal a hose onto a pipe.",
  "aspect": 1,
  "box": [
   7.6,
   16.5,
   78.7,
   61.8
  ]
 }
];
