// IoT & Embedded Projects (Focus: Coding & Sensor Automation Firmware)
import { Project } from '../models/project.model';

export const IOT_EMBEDDED_PROJECTS: Project[] = [
  {
    id: 'iot-greenhouse-automation',
    title: 'Raspberry Pi Precision Greenhouse & Automated Irrigation',
    category: 'IoT/Embedded',
    techStack: ['Python', 'Raspberry Pi', 'MQTT', 'DHT22 Sensors', 'FastAPI'],
    price: 4899,
    shortDescription: 'Coding-focused IoT edge controller running automated sensor polling, PID humidity control, and MQTT cloud telemetry.',
    fullDescription: 'A purely code-driven IoT engineering project focusing on firmware scripting and edge communication. Deploys Python daemon threads on Raspberry Pi 4 to poll multi-channel ADC sensors, apply PID loop algorithms for automated solenoid relay switching, and publish telemetry packets via MQTT broker to a responsive control dashboard.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Multi-threaded Python edge controller polling soil moisture and DHT22',
      'PID control algorithm regulating water valve duration and fans',
      'Lightweight MQTT pub/sub telemetry stream with JSON payloads',
      'WebSocket dashboard showing real-time environmental gauge charts',
      'Complete pinout diagram, simulation mode (runs without hardware!), and setup guide'
    ]
  },
  {
    id: 'iot-tinyml-predictive-maintenance',
    title: 'ESP32 Embedded Predictive Maintenance & Fault Diagnostics',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'ESP32', 'FreeRTOS', 'MPU6050', 'Edge Impulse'],
    price: 4999,
    shortDescription: 'Real-time embedded C++ firmware running edge TinyML FFT vibration analysis to detect bearing and motor wear.',
    fullDescription: 'Focuses heavily on embedded software engineering and FreeRTOS multitasking. Programmed in C++ with custom I2C drivers for MPU-6050 6-axis accelerometers. Executes on-device Fast Fourier Transform (FFT) algorithms and quantized neural network inference to classify mechanical anomalies before physical breakdown occurs.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'FreeRTOS task scheduling separating sensor sampling from neural inference',
      'On-chip Fast Fourier Transform (FFT) vibration spectrum analysis',
      'Quantized INT8 TinyML model running locally on ESP32 microcontroller',
      'Wi-Fi WebSocket telemetry pushing diagnostic alerts to browser UI',
      'Full embedded C++ code with mock sensor generator for easy grading'
    ]
  },
  {
    id: 'iot-smart-home-hub',
    title: 'HomeEdge: Offline-First Smart Home Automation Hub via MQTT & Zigbee',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'ESP32', 'MQTT', 'FreeRTOS'],
    price: 4799,
    shortDescription: 'Local home automation firmware with state machines, scheduled timers, and low-latency MQTT device mesh bridging.',
    fullDescription: 'A code-centric embedded systems project creating an offline-first smart automation coordinator. Programmed in embedded C++ for ESP32, it orchestrates multiple appliance relays, listens for IR/RF commands, manages capacitive touch inputs, and syncs status packets over local Wi-Fi via Mosquitto MQTT without requiring internet cloud dependence.',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Asynchronous FreeRTOS task handling sensor polling and MQTT publish/subscribe',
      'Local captive portal for zero-touch Wi-Fi provisioning into EEPROM',
      'Appliance timer scheduling and rule automation engine in firmware',
      'Mock software mode allowing evaluation without physical relays',
      'Complete embedded C++ source code with hardware connection blueprints'
    ]
  },
  {
    id: 'iot-weather-monitoring-station',
    title: 'AeroMetrics: Microclimate Weather Station with Solar Battery Telemetry',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'ESP8266', 'BME280', 'HTTP REST'],
    price: 4199,
    shortDescription: 'Low-power embedded telemetry node logging atmospheric pressure, ambient temperature, humidity, and UV levels.',
    fullDescription: 'A power-optimized firmware project designed for autonomous remote environmental logging. Uses ESP8266 deep sleep modes to run months on small battery packs. Wakes periodically to read I2C sensor registers (BME280 and VEML6075), validates CRC integrity, transmits JSON payloads to cloud REST endpoints, and resumes deep sleep within 1.2 seconds.',
    imageUrl: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Deep sleep power optimization consuming under 20uA in standby',
      'I2C register communication with BME280 atmospheric sensors',
      'Battery voltage monitoring via internal ADC and linear calibration curves',
      'HTTP REST payload batching with local SPIFFS flash memory buffering',
      'Comprehensive project report with power consumption calculations'
    ]
  },
  {
    id: 'iot-smart-irrigation-system',
    title: 'AgriSense: Autonomous Solar Irrigation Controller with Soil Moisture Matrices',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'Arduino', 'LoRa', 'Sensors'],
    price: 4399,
    shortDescription: 'Long-range LoRa telemetry firmware managing automated multi-zone valve duty cycles based on soil matric potential.',
    fullDescription: 'Engineered for precision agriculture across wide farming fields. Multiple battery-operated field sensor nodes communicate soil moisture and temperature data over 2 km distances using SX1278 LoRa transceivers to a central Arduino master controller. The master executes dynamic hysteresis threshold algorithms to trigger 12V irrigation valves.',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Long-range point-to-point LoRa packet communication protocol with checksums',
      'Multi-zone hysteresis moisture threshold algorithms preventing water hammer',
      'Solar battery charging status logging and power management',
      'Hardware abstraction layer with synthetic data test runner for presentations',
      'Full documentation package including schematic wiring and source code'
    ]
  },
  {
    id: 'iot-rfid-attendance-biometric',
    title: 'GatePass: Touchless RFID & Fingerprint Student Attendance Terminal',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'ESP32', 'RC522 RFID', 'MySQL Sync'],
    price: 4299,
    shortDescription: 'Embedded attendance terminal reading 13.56MHz Mifare cards, validating UID locally, and syncing over Wi-Fi.',
    fullDescription: 'A standalone smart attendance device programmed for ESP32. Communicates with RC522 RFID modules over SPI bus to capture student smart cards in under 200 milliseconds. Features an on-device OLED status display, buzzer feedback, offline SPIFFS attendance queueing, and automatic batch upload to remote MySQL databases.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Fast 200ms SPI bus RFID card UID reading and validation',
      'Local flash storage queue preserving attendance logs during Wi-Fi outages',
      'I2C 0.96-inch OLED screen driving real-time student welcome messages',
      'Direct REST/MySQL sync scripts updating backend attendance registries',
      'Includes simulation mode and complete IEEE standard final year report'
    ]
  },
  {
    id: 'iot-gas-leak-fire-detector',
    title: 'GasGuard: Industrial Hazardous Gas & Toxic Smoke Detection Node',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'ESP8266', 'MQ Sensors', 'Buzzer Alert'],
    price: 3999,
    shortDescription: 'Industrial safety monitor calculating PPM gas concentrations with multi-stage audio-visual sirens and SMS alerts.',
    fullDescription: 'Safety-critical firmware written in Embedded C++ for MQ-2 (LPG/Propane) and MQ-7 (Carbon Monoxide) analog sensors. Performs exponential curve-fitting equations to convert raw voltage readings into calibrated PPM (parts per million). Triggers immediate multi-tone buzzer sirens, activates ventilation fans, and sends emergency alerts.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Exponential curve-fitting math converting analog ADC voltages into PPM units',
      'Dynamic baseline auto-calibration accounting for sensor drift over time',
      'Multi-level alarm thresholds triggering graduated buzzer alert frequencies',
      'Automatic relay activation driving auxiliary exhaust ventilation fans',
      'Full C++ code with detailed mathematical sensor calibration formulas'
    ]
  },
  {
    id: 'iot-vehicle-obd-telematics',
    title: 'FleetTrack: GPS & OBD-II Vehicle Diagnostic Telematics Node',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'ESP32', 'SIM800L GSM', 'NEO-6M GPS'],
    price: 4899,
    shortDescription: 'Automotive telematics firmware parsing NMEA GPS sentences and CAN-bus OBD-II engine parameters over cellular 2G/4G.',
    fullDescription: 'An embedded automotive diagnostics logger connecting to vehicle CAN-bus and GPS modules. Written in modern C++ with TinyGPS++ for NMEA parsing, it tracks vehicle coordinates, speed, RPM, and engine temperature, sending periodic encrypted telematics packets to a fleet tracking server via AT command GSM scripting.',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Asynchronous NMEA 0183 GPS sentence parsing with TinyGPS++ library',
      'Robust AT command engine managing cellular network registration and reconnection',
      'CAN bus vehicle diagnostic message decoding (RPM, Coolant Temp, Speed)',
      'Geofence violation detection and harsh braking acceleration alerts',
      'Comprehensive report including embedded state machine flowcharts'
    ]
  },
  {
    id: 'iot-cold-chain-monitor',
    title: 'ChronoCold: Vaccine Cold-Chain Asset Tracker with Cryptographic Logging',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'ESP32', 'BLE 5.0', 'DS18B20 Sensor'],
    price: 4599,
    shortDescription: 'Pharmaceutical thermal monitor recording Dallas 1-Wire temperature samples with SHA-256 tamper detection.',
    fullDescription: 'Preserves the cold chain integrity of temperature-sensitive biologics and vaccines. Deploys waterproof DS18B20 digital temperature sensors polling every 30 seconds. Creates chained cryptographic SHA-256 log blocks stored in on-board SPI flash, allowing transport couriers to audit temperature compliance over Bluetooth Low Energy (BLE).',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'High-precision Dallas 1-Wire protocol reading ±0.1°C thermal variations',
      'Cryptographically chained tamper-evident flash log structure',
      'BLE 5.0 GATT server advertising current cold chain health status',
      'Thermal excursion alarm flagging instances outside the 2°C–8°C threshold',
      'Complete embedded code with mobile BLE testing app configuration guide'
    ]
  },
  {
    id: 'iot-smart-energy-meter',
    title: 'VoltSense: IoT Split-Core Smart Energy Meter with Peak Load Shedding',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'ESP32', 'PZEM-004T', 'MQTT'],
    price: 4699,
    shortDescription: 'High-precision AC power monitor calculating active power, energy kWh, power factor, and automated relay cutoffs.',
    fullDescription: 'Monitors household or laboratory electricity consumption in real time without dangerous live wire splicing. Communicates with a PZEM-004T split-core current transformer over Modbus RTU UART to measure Voltage, Current, Active Power (Watts), Power Factor, and cumulative kWh, publishing metrics to an MQTT cloud portal.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'UART Modbus RTU communication reading Voltage, Current, Power, and Power Factor',
      'Automatic over-current trip relay protecting sensitive downstream equipment',
      'Time-of-day tariff calculation estimating daily electricity costs',
      'MQTT publishing to Grafana / Node-RED visualization dashboards',
      'Complete source code and detailed documentation of electrical safety standards'
    ]
  },
  {
    id: 'iot-aquaponics-water-quality',
    title: 'AquaMonitor: Real-Time Water Quality Monitoring Node with pH & Turbidity',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'ESP32', 'Analog Sensors', 'OLED'],
    price: 4499,
    shortDescription: 'Multi-parameter aquatic life telemetry firmware sampling analog pH, optical turbidity, and TDS sensor probes.',
    fullDescription: 'Created for fisheries, aquaponics, and hydroponic systems. Uses multi-channel ADC oversampling and moving-average digital filtering algorithms to eliminate sensor noise on analog pH, Total Dissolved Solids (TDS), and optical turbidity probes. Automatically activates water aeration pumps when dissolved oxygen or water purity drops.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Moving-average digital filter algorithms smoothing noisy analog sensor reads',
      'Multi-point linear calibration for pH probes (pH 4.0, 7.0, and 9.2 buffer solutions)',
      'Water aeration and dosing relay control logic maintaining optimal water metrics',
      'I2C OLED screen display + Wi-Fi MQTT telemetry dashboard streaming',
      'Full academic report with sensor calibration tables and wiring diagrams'
    ]
  }
];
