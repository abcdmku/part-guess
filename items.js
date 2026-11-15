// Each item is one isolated photo. Add a new "set" (e.g. "Engines") and it shows up as a filter.
// focus: [x%, y%] to zoom on, defaults to the centre.
window.ITEMS = [
 {
  "name": "Spark plug",
  "set": "Cars",
  "img": "images/spark-plug.jpg",
  "fact": "Fires the fuel-air mix in each cylinder with a tiny electric arc."
 },
 {
  "name": "Alternator",
  "set": "Cars",
  "img": "images/alternator.jpg",
  "fact": "Spun by the engine belt, it charges the battery and powers the electrics."
 },
 {
  "name": "Brake caliper",
  "set": "Cars",
  "img": "images/brake-caliper.jpg",
  "fact": "Squeezes brake pads against the spinning rotor to stop the wheel."
 },
 {
  "name": "Brake rotor",
  "set": "Cars",
  "img": "images/brake-rotor.jpg",
  "fact": "The disc the brake pads clamp onto; it spins with the wheel."
 },
 {
  "name": "Radiator",
  "set": "Cars",
  "img": "images/radiator.jpg",
  "fact": "Sheds engine heat into the air passing through its thin fins."
 },
 {
  "name": "Turbocharger",
  "set": "Cars",
  "img": "images/turbocharger.jpg",
  "fact": "Exhaust spins a turbine that crams extra air into the engine."
 },
 {
  "name": "Air filter",
  "set": "Cars",
  "img": "images/air-filter.jpg",
  "fact": "Stops dust and grit from being sucked into the engine."
 },
 {
  "name": "Timing belt",
  "set": "Cars",
  "img": "images/timing-belt.jpg",
  "fact": "Toothed belt that keeps the camshaft in step with the crankshaft."
 },
 {
  "name": "Camshaft",
  "set": "Cars",
  "img": "images/camshaft.jpg",
  "fact": "Its lobes push the valves open at exactly the right moment."
 },
 {
  "name": "Crankshaft",
  "set": "Cars",
  "img": "images/crankshaft.jpg",
  "fact": "Turns the pistons' up-and-down motion into spinning motion."
 },
 {
  "name": "Piston",
  "set": "Cars",
  "img": "images/piston.jpg",
  "fact": "Pushed down by burning fuel, it drives the crankshaft through its rod."
 },
 {
  "name": "Fuel injector",
  "set": "Cars",
  "img": "images/fuel-injector.jpg",
  "fact": "Sprays a fine mist of fuel into the engine, controlled by the computer."
 },
 {
  "name": "CV axle",
  "set": "Cars",
  "img": "images/cv-axle.jpg",
  "fact": "Carries power from the gearbox to a front wheel while it steers and bounces."
 },
 {
  "name": "Shock absorber",
  "set": "Cars",
  "img": "images/shock-absorber.jpg",
  "fact": "Damps the spring so the car doesn't keep bouncing after a bump."
 },
 {
  "name": "Exhaust manifold",
  "set": "Cars",
  "img": "images/exhaust-manifold.jpg",
  "fact": "Collects exhaust from each cylinder into one pipe."
 },
 {
  "name": "Oil filter",
  "set": "Cars",
  "img": "images/oil-filter.jpg",
  "fact": "Catches grit and metal bits before oil goes back round the engine."
 },
 {
  "name": "Starter motor",
  "set": "Cars",
  "img": "images/starter-motor.jpg",
  "fact": "An electric motor that cranks the engine to get it running."
 },
 {
  "name": "Distributor cap",
  "set": "Cars",
  "img": "images/distributor-cap.jpg",
  "fact": "Sends the spark to each cylinder in turn on older engines."
 },
 {
  "name": "Carburetor",
  "set": "Cars",
  "img": "images/carburetor.jpg",
  "fact": "Mixes fuel into incoming air, the job injectors do in modern cars."
 },
 {
  "name": "Clutch disc",
  "set": "Cars",
  "img": "images/clutch-disc.jpg",
  "fact": "Grips the flywheel so engine power reaches the gearbox."
 },
 {
  "name": "Catalytic converter",
  "set": "Cars",
  "img": "images/catalytic-converter.jpg",
  "fact": "A honeycomb coated in precious metals that cleans exhaust gas."
 },
 {
  "name": "Ignition coil",
  "set": "Cars",
  "img": "images/ignition-coil.jpg",
  "fact": "Turns 12 volts into the tens of thousands a spark plug needs."
 },
 {
  "name": "Water pump",
  "set": "Cars",
  "img": "images/water-pump.jpg",
  "fact": "Pushes coolant round the engine and radiator."
 },
 {
  "name": "Serpentine belt",
  "set": "Cars",
  "img": "images/serpentine-belt.jpg",
  "fact": "One long ribbed belt that drives the alternator, AC and power steering."
 },
 {
  "name": "Wheel hub",
  "set": "Cars",
  "img": "images/wheel-hub.jpg",
  "fact": "Holds the wheel on its bearing so it spins smoothly."
 },
 {
  "name": "Thermostat",
  "set": "Cars",
  "img": "images/thermostat.jpg",
  "fact": "A wax valve that keeps coolant in the engine until it warms up."
 },
 {
  "name": "Brake pads",
  "set": "Cars",
  "img": "images/brake-pads.jpg",
  "fact": "The friction blocks that rub on the rotor when you brake."
 },
 {
  "name": "Oxygen sensor",
  "set": "Cars",
  "img": "images/oxygen-sensor.jpg",
  "fact": "Sniffs the exhaust so the computer can tune the fuel mix."
 },
 {
  "name": "Muffler",
  "set": "Cars",
  "img": "images/muffler.jpg",
  "fact": "Quiets the exhaust with chambers and baffles."
 },
 {
  "name": "Tie rod end",
  "set": "Cars",
  "img": "images/tie-rod-end.jpg",
  "fact": "The ball joint linking the steering rack to the wheel."
 },
 {
  "name": "Ratchet",
  "set": "Tools",
  "img": "images/ratchet.jpg",
  "fact": "Turns a socket back and forth without lifting it off the bolt."
 },
 {
  "name": "Torque wrench",
  "set": "Tools",
  "img": "images/torque-wrench.jpg",
  "fact": "Clicks when a bolt reaches exactly the right tightness."
 },
 {
  "name": "Adjustable wrench",
  "set": "Tools",
  "img": "images/adjustable-wrench.jpg",
  "fact": "One wrench whose jaw slides to fit many bolt sizes."
 },
 {
  "name": "Combination wrench",
  "set": "Tools",
  "img": "images/combination-wrench.jpg",
  "fact": "Open jaw on one end, closed ring on the other, same size."
 },
 {
  "name": "Locking pliers",
  "set": "Tools",
  "img": "images/locking-pliers.jpg",
  "fact": "Pliers that clamp shut and stay locked on their own."
 },
 {
  "name": "Needle-nose pliers",
  "set": "Tools",
  "img": "images/needle-nose-pliers.jpg",
  "fact": "Long thin jaws for reaching into tight spots."
 },
 {
  "name": "Claw hammer",
  "set": "Tools",
  "img": "images/claw-hammer.jpg",
  "fact": "Drives nails in, and the forked claw pulls them out."
 },
 {
  "name": "Phillips screwdriver",
  "set": "Tools",
  "img": "images/phillips-screwdriver.jpg",
  "fact": "Cross-shaped tip for the most common screws."
 },
 {
  "name": "Allen keys",
  "set": "Tools",
  "img": "images/allen-keys.jpg",
  "fact": "L-shaped hex bars for bolts with a six-sided hole."
 },
 {
  "name": "Tape measure",
  "set": "Tools",
  "img": "images/tape-measure.jpg",
  "fact": "A spring-loaded steel ribbon for measuring length."
 },
 {
  "name": "Spirit level",
  "set": "Tools",
  "img": "images/spirit-level.jpg",
  "fact": "A bubble in a vial shows when a surface is perfectly flat."
 },
 {
  "name": "Hacksaw",
  "set": "Tools",
  "img": "images/hacksaw.jpg",
  "fact": "A fine-toothed blade held tight in a frame, for cutting metal."
 },
 {
  "name": "Wire strippers",
  "set": "Tools",
  "img": "images/wire-strippers.jpg",
  "fact": "Strips the insulation off wire without cutting the copper."
 },
 {
  "name": "Vernier caliper",
  "set": "Tools",
  "img": "images/vernier-caliper.jpg",
  "fact": "Measures thickness and diameter to a fraction of a millimetre."
 },
 {
  "name": "Multimeter",
  "set": "Tools",
  "img": "images/multimeter.jpg",
  "fact": "Measures voltage, current and resistance in a circuit."
 },
 {
  "name": "Pipe wrench",
  "set": "Tools",
  "img": "images/pipe-wrench.jpg",
  "fact": "Serrated jaws bite into round pipe as you turn it."
 },
 {
  "name": "Chisel",
  "set": "Tools",
  "img": "images/chisel.jpg",
  "fact": "A sharp bevelled blade for carving and paring wood."
 },
 {
  "name": "Impact driver",
  "set": "Tools",
  "img": "images/impact-driver.jpg",
  "fact": "Hammers while it spins to drive long screws and bolts."
 },
 {
  "name": "Tin snips",
  "set": "Tools",
  "img": "images/tin-snips.jpg",
  "fact": "Scissors for cutting sheet metal."
 },
 {
  "name": "Socket set",
  "set": "Tools",
  "img": "images/socket-set.jpg",
  "fact": "Sockets in a row of sizes that snap onto a ratchet."
 },
 {
  "name": "Ball bearing",
  "set": "Parts",
  "img": "images/ball-bearing.jpg",
  "fact": "Steel balls rolling between two rings so a shaft spins freely."
 },
 {
  "name": "Spur gear",
  "set": "Parts",
  "img": "images/spur-gear.jpg",
  "fact": "A toothed wheel that meshes with another to pass on motion."
 },
 {
  "name": "Hex bolt and nut",
  "set": "Parts",
  "img": "images/hex-bolt-and-nut.jpg",
  "fact": "A threaded bolt and the nut that screws onto it."
 },
 {
  "name": "Compression spring",
  "set": "Parts",
  "img": "images/compression-spring.jpg",
  "fact": "A coil that pushes back when you squeeze it."
 },
 {
  "name": "Pulley",
  "set": "Parts",
  "img": "images/pulley.jpg",
  "fact": "A grooved wheel that a belt runs around."
 },
 {
  "name": "Roller chain",
  "set": "Parts",
  "img": "images/roller-chain.jpg",
  "fact": "Linked rollers that carry power between sprockets, like a bike chain."
 },
 {
  "name": "Sprocket",
  "set": "Parts",
  "img": "images/sprocket.jpg",
  "fact": "A toothed wheel that a roller chain wraps around."
 },
 {
  "name": "Washer",
  "set": "Parts",
  "img": "images/washer.jpg",
  "fact": "A flat ring that spreads the load under a nut or bolt head."
 },
 {
  "name": "Rivet",
  "set": "Parts",
  "img": "images/rivet.jpg",
  "fact": "Pulled tight to permanently join two sheets."
 },
 {
  "name": "Hinge",
  "set": "Parts",
  "img": "images/hinge.jpg",
  "fact": "Lets a door swing on its pin."
 },
 {
  "name": "Universal joint",
  "set": "Parts",
  "img": "images/universal-joint.jpg",
  "fact": "A cross-shaped joint that passes rotation around a bend."
 },
 {
  "name": "Cotter pin",
  "set": "Parts",
  "img": "images/cotter-pin.jpg",
  "fact": "A split pin that locks a nut or pin in place."
 },
 {
  "name": "Worm gear",
  "set": "Parts",
  "img": "images/worm-gear.jpg",
  "fact": "A screw turning a gear, for big slow-down and no back-drive."
 },
 {
  "name": "Ball valve",
  "set": "Parts",
  "img": "images/ball-valve.jpg",
  "fact": "A quarter turn of the handle opens or shuts the flow."
 },
 {
  "name": "Hose clamp",
  "set": "Parts",
  "img": "images/hose-clamp.jpg",
  "fact": "A band that screws tight to seal a hose onto a pipe."
 }
];
