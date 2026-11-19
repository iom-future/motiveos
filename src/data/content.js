export const NAV_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Technology', href: '#architecture' },
  { label: 'Applications', href: '#applications' },
  { label: 'Developers', href: '#developers' },
  { label: 'Research', href: '#world-model' },
]

export const PROBLEM_ITEMS = [
  {
    title: 'Fragmented Intelligence',
    description:
      'Perception, navigation, planning and control are often developed as separate systems, making integration complex and difficult to maintain.',
  },
  {
    title: 'Static Behaviour',
    description:
      'Robots designed around fixed instructions can struggle when environments change or unexpected conditions arise.',
  },
  {
    title: 'Limited Environmental Understanding',
    description:
      'Machines may detect objects or obstacles without fully understanding their relevance to the task they are performing.',
  },
  {
    title: 'Complex Robotics Development',
    description:
      'Developers must integrate multiple libraries, sensors, models and control systems before they can build meaningful autonomous behaviour.',
  },
]

export const WORKFLOW_STEPS = [
  {
    id: 'perception',
    title: 'Perceive',
    tabLabel: 'Perception',
    summary:
      'Process information from cameras, depth sensors, LiDAR, IMUs and other available sensors.',
    detail:
      'Multi-modal sensor streams are ingested, synchronized, and converted into structured detections and depth estimates in real time.',
  },
  {
    id: 'world-model',
    title: 'Understand',
    tabLabel: 'Environment Model',
    summary:
      "Build contextual representations of the robot's surroundings, including objects, obstacles, spatial relationships and environmental conditions.",
    detail:
      'Detections are fused into a persistent spatial graph capturing navigable corridors, clearance zones, and object-to-task relevance.',
  },
  {
    id: 'planning',
    title: 'Plan',
    tabLabel: 'Decision & Planning',
    summary:
      'Determine appropriate actions based on the environment, task objectives, constraints and current robot state.',
    detail:
      'Candidate trajectories and task sequences are evaluated against kinematic limits, dynamic obstacles, and operational constraints.',
  },
  {
    id: 'execution',
    title: 'Act & Adapt',
    tabLabel: 'Execution',
    summary:
      'Execute actions through connected control systems, monitor the outcome and adjust behaviour as the environment changes.',
    detail:
      'Commands are dispatched to connected robot controllers while continuous state feedback updates the world representation.',
  },
]

export const CORE_CAPABILITIES = [
  {
    title: 'Environmental Perception',
    description: 'Help robots interpret information from their surroundings.',
    items: [
      'Object detection and recognition',
      'Obstacle identification',
      'Spatial awareness',
      'Scene understanding',
      'Sensor data processing',
    ],
  },
  {
    title: 'Sensor Fusion',
    description:
      'Combine information from multiple sensors into a more comprehensive representation of the physical environment.',
    items: [
      'Camera integration',
      'LiDAR processing',
      'Depth information',
      'IMU data',
      'Multi-sensor synchronization',
    ],
  },
  {
    title: 'Spatial Intelligence',
    description:
      "Understand relationships between objects, locations and the robot's environment.",
    items: [
      'Spatial mapping',
      'Object positioning',
      'Environment representation',
      'Navigation context',
      'Scene relationships',
    ],
  },
  {
    title: 'Intelligent Planning',
    description:
      'Support decision-making based on environmental information and task objectives.',
    items: [
      'Task planning',
      'Path planning integration',
      'Obstacle-aware navigation',
      'Contextual decision-making',
      'Adaptive behaviour',
    ],
  },
  {
    title: 'Autonomous Execution',
    description:
      'Connect intelligence with robotic systems capable of executing physical actions.',
    items: [
      'Action orchestration',
      'Robot state monitoring',
      'Control system integration',
      'Execution feedback',
      'Behaviour coordination',
    ],
  },
  {
    title: 'Adaptive Intelligence',
    description:
      'Enable robotic systems to respond to changing environmental conditions.',
    items: [
      'Environmental change detection',
      'Dynamic obstacle handling',
      'Context-aware decisions',
      'Feedback-driven adjustments',
      'Behaviour evaluation',
    ],
  },
]

export const DEVELOPER_CAPABILITIES = [
  {
    title: 'Modular Architecture',
    description:
      'Integrate the capabilities you need rather than adopting an entire robotics stack.',
  },
  {
    title: 'Robotics Framework Integration',
    description:
      'Provide compatibility with widely used robotics development frameworks and middleware as integrations mature.',
  },
  {
    title: 'API & SDK Support',
    description:
      'Offer developer-friendly interfaces for interacting with perception, spatial intelligence and decision-making capabilities.',
  },
  {
    title: 'Simulation Support',
    description:
      'Allow developers to test intelligent behaviours within simulated environments before deploying to physical robots.',
  },
  {
    title: 'Hardware Flexibility',
    description:
      'Support different robotic platforms and sensor configurations through modular interfaces.',
  },
  {
    title: 'Developer Documentation',
    description:
      'Provide practical tutorials, API references, integration guides and example projects.',
  },
]

export const CODE_EXAMPLES = {
  python: {
    label: 'Python',
    filename: 'navigate_bay.py',
    code: `from motiveos import Robot, Environment

robot = Robot.connect("mobile_robot")
environment = Environment.from_sensors(robot)

scene = environment.observe()

decision = robot.intelligence.plan(
    objective="navigate_to_target",
    environment=scene
)

robot.execute(decision)`,
  },
  cpp: {
    label: 'C++',
    filename: 'navigate_bay.cpp',
    code: `#include <motiveos/robot.hpp>
#include <motiveos/environment.hpp>

int main() {
  auto robot = motiveos::Robot::connect("mobile_robot");
  auto env = motiveos::Environment::from_sensors(robot);

  const auto scene = env.observe();
  const auto decision = robot.intelligence().plan({
      .objective = "navigate_to_target",
      .environment = scene,
  });

  robot.execute(decision);
  return 0;
}`,
  },
  config: {
    label: 'Configuration',
    filename: 'motive.yaml',
    code: `robot:
  id: mobile_robot
  platform: amr_differential
  frame_id: base_link

sensors:
  - name: front_stereo
    type: rgbd_camera
    rate_hz: 30
  - name: roof_lidar
    type: lidar_3d
    rate_hz: 10
  - name: chassis_imu
    type: imu
    rate_hz: 200

intelligence:
  world_model: spatial_graph_v1
  planner: constraint_aware_nav
  human_oversight: supervised`,
  },
}

export const ARCHITECTURE_LAYERS = [
  {
    id: 'sensors',
    title: 'Sensor Layer',
    shortLabel: 'Sensors',
    description:
      'Receive information from cameras, LiDAR, IMUs, depth sensors and other connected devices.',
    signals: ['RGB-D Streams', '3D Point Clouds', 'Odometry & IMU'],
  },
  {
    id: 'perception',
    title: 'Perception Layer',
    shortLabel: 'Perception',
    description:
      'Transform sensor information into meaningful environmental observations.',
    signals: ['Object Detection', 'Obstacle Segmentation', 'Pose Estimation'],
  },
  {
    id: 'world-model',
    title: 'World Representation',
    shortLabel: 'World Model',
    description:
      'Build contextual representations of objects, locations, spatial relationships and environmental conditions.',
    signals: ['Spatial Graph', 'Occupancy Field', 'Task Context'],
  },
  {
    id: 'planning',
    title: 'Planning & Intelligence',
    shortLabel: 'Planning',
    description:
      'Determine appropriate actions based on the environment, objectives and system constraints.',
    signals: ['Trajectory Synthesis', 'Constraint Checking', 'Task Sequencing'],
  },
  {
    id: 'execution',
    title: 'Execution & Feedback',
    shortLabel: 'Action',
    description:
      'Execute actions, monitor outcomes and provide feedback to the intelligence system.',
    signals: ['Controller Dispatch', 'State Telemetry', 'Outcome Loop'],
  },
]

export const WORLD_MODEL_CAPABILITIES = [
  {
    title: 'Spatial Understanding',
    description:
      "Represent objects and their positions within the robot's environment.",
  },
  {
    title: 'Environmental Context',
    description:
      'Understand the relationships between objects, surfaces, obstacles and navigable spaces.',
  },
  {
    title: 'Dynamic Awareness',
    description:
      'Observe and update representations as objects or environmental conditions change.',
  },
  {
    title: 'Task Context',
    description:
      "Understand which environmental information is relevant to the robot's current objective.",
  },
]

export const APPLICATIONS = [
  {
    title: 'Autonomous Mobile Robots',
    description:
      'Help mobile robots understand their surroundings and navigate changing environments.',
    imageKey: 'amr',
    alt: 'Autonomous mobile robot with LiDAR and stereo cameras navigating a modern industrial facility corridor',
  },
  {
    title: 'Industrial Robotics',
    description:
      'Support intelligent robotic systems operating within manufacturing and industrial facilities.',
    imageKey: 'industrial',
    alt: 'Articulated industrial robotic arm aligning a machined metal assembly inside a modern manufacturing cell',
  },
  {
    title: 'Warehouse Automation',
    description:
      'Enable autonomous systems to interpret warehouse environments and navigate operational spaces.',
    imageKey: 'warehouse',
    alt: 'Autonomous warehouse robot transporting a tote bin along a high-bay pallet shelving aisle',
  },
  {
    title: 'Research Robotics',
    description:
      'Provide modular intelligence capabilities for robotics laboratories exploring perception, autonomous behaviour and physical AI.',
    imageKey: 'research',
    alt: 'Wheeled mobile manipulator operating inside a robotics research laboratory',
  },
  {
    title: 'Service Robotics',
    description:
      'Support robots operating in environments where they must interact with objects, people and changing surroundings.',
    imageKey: 'service',
    alt: 'Autonomous service robot navigating a modern glass-and-concrete architectural lobby',
  },
  {
    title: 'Agricultural Robotics',
    description:
      'Explore intelligent robotic systems capable of interpreting agricultural environments and performing context-aware operations.',
    imageKey: 'agricultural',
    alt: 'Autonomous agricultural field robot equipped with optical sensors moving between crop rows at dusk',
  },
]

export const SIMULATION_CAPABILITIES = [
  {
    title: 'Environment Simulation',
    description:
      'Create or import environments for testing robotic behaviour.',
  },
  {
    title: 'Scenario Testing',
    description:
      'Evaluate how systems respond to obstacles, environmental changes and task variations.',
  },
  {
    title: 'Behaviour Evaluation',
    description:
      'Review the performance of perception, planning and execution systems.',
  },
  {
    title: 'Deployment Workflow',
    description:
      'Move validated configurations into supported physical robotic environments.',
  },
]

export const AUDIENCE_ITEMS = [
  {
    title: 'Robotics Developers',
    description:
      'Build autonomous behaviours and integrate perception, planning and execution systems.',
  },
  {
    title: 'Robotics Startups',
    description:
      'Develop intelligent robotic products without independently building every component of their software intelligence stack.',
  },
  {
    title: 'Research Laboratories',
    description:
      'Explore perception, autonomous systems, spatial intelligence and physical AI.',
  },
  {
    title: 'Industrial Automation Teams',
    description:
      'Develop robotic applications capable of operating within complex industrial environments.',
  },
  {
    title: 'Hardware Manufacturers',
    description:
      'Integrate intelligent software capabilities into robotic platforms.',
  },
  {
    title: 'AI Researchers',
    description:
      'Explore the intersection of artificial intelligence, physical environments and autonomous behaviour.',
  },
]

export const INTEGRATION_CATEGORIES = [
  {
    category: 'Robotics Middleware',
    items: ['ROS 2', 'DDS & Robotics IPC'],
  },
  {
    category: 'Simulation',
    items: ['Gazebo', 'NVIDIA Isaac Sim', 'MuJoCo / Custom Sims'],
  },
  {
    category: 'Hardware',
    items: [
      'Mobile Robot Platforms',
      'Robotic Arms',
      'Stereo & RGB-D Cameras',
      '2D / 3D LiDAR',
      'Depth & IMU Sensors',
    ],
  },
  {
    category: 'Development',
    items: ['Python', 'C++', 'Linux Robotics Environments'],
  },
  {
    category: 'AI & Machine Learning',
    items: [
      'Computer Vision Frameworks',
      'ONNX / TensorRT Inference',
      'Custom Model Integration',
    ],
  },
]

export const SAFETY_PRINCIPLES = [
  {
    title: 'Safety Constraints',
    description:
      'Robotic behaviour must operate within defined physical and operational constraints.',
  },
  {
    title: 'Human Oversight',
    description:
      'Critical operations should provide appropriate human supervision and intervention capabilities.',
  },
  {
    title: 'Testing & Validation',
    description:
      'Intelligent behaviours should be evaluated in controlled environments before deployment.',
  },
  {
    title: 'Transparent Behaviour',
    description:
      'Developers should be able to inspect system state, decisions and relevant execution information.',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'What is MotiveOS?',
    answer:
      'MotiveOS is a proposed robotics intelligence platform designed to help developers build autonomous systems that perceive, understand and respond to physical environments.',
  },
  {
    question: 'Is MotiveOS a robotic operating system?',
    answer:
      'The product is envisioned as an intelligence and orchestration layer for robotics. It is not intended to replace established robotics operating systems or middleware. Its role is to complement existing infrastructure.',
  },
  {
    question: 'What types of robots can use MotiveOS?',
    answer:
      'The initial product direction focuses on autonomous mobile robots and research systems. The longer-term platform could support a wider range of robotic applications.',
  },
  {
    question: 'Does MotiveOS require specific hardware?',
    answer:
      'The platform is intended to support modular hardware integrations. Actual supported sensors and robotic platforms will depend on the available integrations.',
  },
  {
    question: 'Does MotiveOS support simulation?',
    answer:
      'Simulation is an important part of the product vision, allowing developers to test robotic behaviours in controlled environments before deployment.',
  },
  {
    question: 'Who should use MotiveOS?',
    answer:
      'Robotics developers, research laboratories, robotics startups, industrial automation teams and hardware manufacturers.',
  },
  {
    question: 'Can developers integrate MotiveOS into existing projects?',
    answer:
      'The platform is intended to provide modular interfaces and developer tools for integrating robotics intelligence into existing systems.',
  },
]

export const FOOTER_COLUMNS = {
  Platform: [
    { label: 'Overview', href: '#platform' },
    { label: 'Perception', href: '#capabilities' },
    { label: 'Spatial Intelligence', href: '#world-model' },
    { label: 'Planning', href: '#architecture' },
  ],
  Developers: [
    { label: 'Documentation', href: '#developers' },
    { label: 'API Reference', href: '#developers' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Simulation', href: '#simulation' },
  ],
  Company: [
    { label: 'About', href: '#problem' },
    { label: 'Research', href: '#world-model' },
    { label: 'Early Access', href: '#early-access' },
    { label: 'Contact', href: '#early-access' },
  ],
  Resources: [
    { label: 'Robotics Insights', href: '#applications' },
    { label: 'Documentation', href: '#developers' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Privacy Policy', href: '#early-access' },
  ],
}

