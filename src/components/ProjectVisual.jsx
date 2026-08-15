"use client";

import { motion } from "framer-motion";

const ACCENT = "#D8FF3E";
const MUTED = "#6b7280";
const TEXT_LIGHT = "#f1f1f1";
const BORDER_COLOR = "#2a2a2a";

// ─── Shared Frame ────────────────────────────────────────────────

function VisualFrame({ slug, className, animated, gradient, children }) {
  return (
    <motion.div
      className={`relative overflow-hidden bg-border rounded-sm ${className}`}
      whileHover={animated ? { scale: 1.02 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${slug}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={ACCENT}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${slug})`} />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center p-6">
        {children}
      </div>

      <div
        className="absolute top-4 right-4 w-12 h-12 border-t border-r opacity-30"
        style={{ borderColor: ACCENT }}
      />
      <div
        className="absolute bottom-4 left-4 w-12 h-12 border-b border-l opacity-30"
        style={{ borderColor: ACCENT }}
      />
    </motion.div>
  );
}

// ─── SVG Helpers ─────────────────────────────────────────────────

function Box({ x, y, w, h, label, accent = false, small = false }) {
  const fontSize = small ? 8 : 10;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="3"
        fill={accent ? `${ACCENT}15` : `${BORDER_COLOR}`}
        stroke={accent ? ACCENT : MUTED}
        strokeWidth={accent ? 1 : 0.5}
      />
      <text
        x={x + w / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill={accent ? ACCENT : TEXT_LIGHT}
        fontSize={fontSize}
        fontFamily="'DM Sans', sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, dashed = false }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={MUTED}
      strokeWidth="0.8"
      strokeDasharray={dashed ? "4 3" : undefined}
      markerEnd="url(#arrowhead)"
    />
  );
}

function ArrowDefs() {
  return (
    <defs>
      <marker
        id="arrowhead"
        markerWidth="8"
        markerHeight="6"
        refX="7"
        refY="3"
        orient="auto"
      >
        <polygon points="0 0, 8 3, 0 6" fill={MUTED} />
      </marker>
    </defs>
  );
}

function Cylinder({ cx, cy, w, h, label }) {
  const rx = w / 2;
  const ry = 6;
  return (
    <g>
      <ellipse cx={cx} cy={cy + h} rx={rx} ry={ry} fill={BORDER_COLOR} stroke={MUTED} strokeWidth="0.5" />
      <rect x={cx - rx} y={cy} width={w} height={h} fill={BORDER_COLOR} stroke="none" />
      <line x1={cx - rx} y1={cy} x2={cx - rx} y2={cy + h} stroke={MUTED} strokeWidth="0.5" />
      <line x1={cx + rx} y1={cy} x2={cx + rx} y2={cy + h} stroke={MUTED} strokeWidth="0.5" />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`${ACCENT}15`} stroke={ACCENT} strokeWidth="0.8" />
      <text
        x={cx}
        y={cy + h / 2 + 4}
        textAnchor="middle"
        dominantBaseline="central"
        fill={TEXT_LIGHT}
        fontSize="9"
        fontFamily="'DM Sans', sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

function Cloud({ cx, cy, label }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx="30" ry="16" fill="none" stroke={MUTED} strokeWidth="0.8" strokeDasharray="3 2" />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fill={MUTED}
        fontSize="9"
        fontFamily="'DM Sans', sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

function Badge({ x, y, label, accent = false }) {
  const textLen = label.length * 5.5 + 12;
  return (
    <g>
      <rect
        x={x - textLen / 2}
        y={y - 8}
        width={textLen}
        height={16}
        rx="8"
        fill={accent ? `${ACCENT}20` : `${BORDER_COLOR}`}
        stroke={accent ? `${ACCENT}60` : `${MUTED}40`}
        strokeWidth="0.5"
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={accent ? ACCENT : MUTED}
        fontSize="7"
        fontFamily="'DM Sans', sans-serif"
        letterSpacing="0.5"
      >
        {label}
      </text>
    </g>
  );
}

function SectionLabel({ x, y, label }) {
  return (
    <text
      x={x}
      y={y}
      fill={`${MUTED}80`}
      fontSize="7"
      fontFamily="'DM Sans', sans-serif"
      letterSpacing="1.5"
      textAnchor="start"
    >
      {label.toUpperCase()}
    </text>
  );
}

// ─── NEXORA Visuals ──────────────────────────────────────────────

function NexoraOverview() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="Platform Architecture" />

      {/* Browser / Frontend */}
      <Box x={110} y={26} w={100} h={30} label="Next.js Frontend" accent />

      {/* Arrow down */}
      <Arrow x1={160} y1={56} x2={160} y2={72} />

      {/* API Gateway */}
      <Box x={100} y={74} w={120} h={30} label="Spring Boot API" />

      {/* Arrow down */}
      <Arrow x1={160} y1={104} x2={160} y2={120} />

      {/* Database */}
      <Cylinder cx={160} cy={122} w={80} h={28} label="PostgreSQL" />

      {/* Side labels */}
      <Badge x={50} y={45} label="TypeScript" />
      <Badge x={270} y={45} label="Tailwind CSS" />
      <Badge x={50} y={92} label="REST API" accent />
      <Badge x={270} y={92} label="Controllers" />
    </svg>
  );
}

function NexoraArchitecture() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="Component Layers" />

      {/* UI Layer */}
      <Box x={60} y={28} w={200} h={28} label="UI — Pages & Components" accent />

      {/* Arrow */}
      <Arrow x1={160} y1={56} x2={160} y2={68} />

      {/* Service Layer */}
      <Box x={60} y={70} w={200} h={28} label="API — Routes & Controllers" />

      {/* Arrow */}
      <Arrow x1={160} y1={98} x2={160} y2={110} />

      {/* Data Layer */}
      <Box x={60} y={112} w={200} h={28} label="Data — Entities & Repositories" />

      {/* Arrow */}
      <Arrow x1={160} y1={140} x2={160} y2={152} />

      {/* DB */}
      <Box x={110} y={154} w={100} h={22} label="PostgreSQL" small />
    </svg>
  );
}

function NexoraDetail() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="Request Flow" />

      {/* Horizontal request flow */}
      <Box x={10} y={70} w={60} h={36} label="Client" small />
      <Arrow x1={70} y1={88} x2={95} y2={88} />

      <Box x={97} y={70} w={56} h={36} label="API" accent small />
      <Arrow x1={153} y1={88} x2={178} y2={88} />

      <Box x={180} y={70} w={56} h={36} label="Service" small />
      <Arrow x1={236} y1={88} x2={256} y2={88} />

      <Box x={258} y={70} w={52} h={36} label="DB" small />

      {/* Return arrow */}
      <line x1={258} y1={115} x2={70} y2={115} stroke={ACCENT} strokeWidth="0.6" strokeDasharray="4 3" />
      <polygon points="70,112 70,118 63,115" fill={ACCENT} />

      {/* Labels */}
      <Badge x={83} y={62} label="GET /deals" accent />
      <Badge x={160} y={128} label="JSON Response" accent />
    </svg>
  );
}

// ─── pfSense Firewall Visuals ────────────────────────────────────

function PfSenseOverview() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="Network Topology" />

      {/* WAN Cloud */}
      <Cloud cx={50} cy={90} label="WAN" />

      {/* Arrow to pfSense */}
      <Arrow x1={80} y1={90} x2={115} y2={90} />

      {/* pfSense Firewall — central */}
      <rect x={117} y={62} width={86} height={56} rx="4" fill={`${ACCENT}10`} stroke={ACCENT} strokeWidth="1.2" />
      <text x={160} y={83} textAnchor="middle" fill={ACCENT} fontSize="11" fontFamily="'DM Sans', sans-serif" fontWeight="600">pfSense</text>
      <text x={160} y={100} textAnchor="middle" fill={MUTED} fontSize="7" fontFamily="'DM Sans', sans-serif">FIREWALL</text>

      {/* Arrows to LAN devices */}
      <Arrow x1={203} y1={78} x2={238} y2={55} />
      <Arrow x1={203} y1={90} x2={238} y2={90} />
      <Arrow x1={203} y1={102} x2={238} y2={125} />

      {/* LAN Devices */}
      <Box x={240} y={40} w={65} h={26} label="Workstation" small />
      <Box x={240} y={77} w={65} h={26} label="Server" small />
      <Box x={240} y={112} w={65} h={26} label="DMZ Host" small />

      {/* Zone labels */}
      <Badge x={50} y={118} label="UNTRUSTED" />
      <Badge x={272} y={150} label="LAN / DMZ" accent />
    </svg>
  );
}

function PfSenseArchitecture() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <SectionLabel x={10} y={16} label="Firewall Rule Stack" />

      {/* Rule rows */}
      {[
        { rule: "Pass", iface: "LAN", dir: "→ WAN", desc: "Allow outbound", y: 36 },
        { rule: "Block", iface: "WAN", dir: "→ LAN", desc: "Block unsolicited", y: 68 },
        { rule: "Pass", iface: "LAN", dir: "→ DMZ", desc: "Allow internal access", y: 100 },
        { rule: "Pass", iface: "DMZ", dir: "→ WAN", desc: "Allow services out", y: 132 },
      ].map((r, i) => (
        <g key={i}>
          <rect x={20} y={r.y} width={280} height={26} rx="3" fill={BORDER_COLOR} stroke={`${MUTED}30`} strokeWidth="0.5" />
          <rect
            x={24}
            y={r.y + 5}
            width={40}
            height={16}
            rx="8"
            fill={r.rule === "Pass" ? `${ACCENT}20` : "#ef444420"}
            stroke={r.rule === "Pass" ? `${ACCENT}50` : "#ef444450"}
            strokeWidth="0.5"
          />
          <text x={44} y={r.y + 13} textAnchor="middle" dominantBaseline="central" fill={r.rule === "Pass" ? ACCENT : "#ef4444"} fontSize="7" fontFamily="'DM Sans', sans-serif" fontWeight="600">{r.rule.toUpperCase()}</text>
          <text x={80} y={r.y + 13} textAnchor="start" dominantBaseline="central" fill={TEXT_LIGHT} fontSize="8" fontFamily="'DM Sans', sans-serif">{r.iface}</text>
          <text x={110} y={r.y + 13} textAnchor="start" dominantBaseline="central" fill={MUTED} fontSize="8" fontFamily="'DM Sans', sans-serif">{r.dir}</text>
          <text x={165} y={r.y + 13} textAnchor="start" dominantBaseline="central" fill={`${MUTED}90`} fontSize="7" fontFamily="'DM Sans', sans-serif">{r.desc}</text>
        </g>
      ))}

      <Badge x={160} y={170} label="4 RULES CONFIGURED" accent />
    </svg>
  );
}

function PfSenseDetail() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="NAT / Port Forward" />

      {/* External */}
      <Box x={20} y={62} w={76} h={36} label="External IP" small />

      {/* Arrow to pfSense */}
      <Arrow x1={96} y1={80} x2={118} y2={80} />

      {/* pfSense NAT box */}
      <rect x={120} y={55} width={80} height={50} rx="4" fill={`${ACCENT}10`} stroke={ACCENT} strokeWidth="1" />
      <text x={160} y={73} textAnchor="middle" fill={ACCENT} fontSize="9" fontFamily="'DM Sans', sans-serif" fontWeight="600">pfSense</text>
      <text x={160} y={88} textAnchor="middle" fill={MUTED} fontSize="7" fontFamily="'DM Sans', sans-serif">NAT Engine</text>

      {/* Arrow to internal */}
      <Arrow x1={200} y1={80} x2={222} y2={80} />

      {/* Internal */}
      <Box x={224} y={62} w={80} h={36} label="Internal Host" small />

      {/* Port labels */}
      <Badge x={108} y={48} label="Port 443" />
      <Badge x={212} y={48} label="Port 8443" />

      {/* Translation arrow */}
      <line x1={90} y1={130} x2={230} y2={130} stroke={`${ACCENT}40`} strokeWidth="0.8" strokeDasharray="4 3" />
      <text x={160} y={126} textAnchor="middle" fill={MUTED} fontSize="7" fontFamily="'DM Sans', sans-serif">ADDRESS TRANSLATION</text>

      <Badge x={90} y={145} label="WAN:443" />
      <text x={160} y={145} textAnchor="middle" fill={MUTED} fontSize="10" fontFamily="'DM Sans', sans-serif">→</text>
      <Badge x={230} y={145} label="LAN:8443" accent />
    </svg>
  );
}

// ─── FreeBSD & Asterisk VoIP Visuals ─────────────────────────────

function VoipOverview() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="VoIP System" />

      {/* SIP Phone A */}
      <Box x={15} y={65} w={60} h={50} label="SIP 101" small />
      <text x={45} y={127} textAnchor="middle" fill={MUTED} fontSize="7" fontFamily="'DM Sans', sans-serif">Extension</text>

      {/* Arrow to PBX */}
      <Arrow x1={75} y1={90} x2={105} y2={90} />

      {/* FreeBSD + Asterisk Server */}
      <rect x={107} y={40} width={106} height={100} rx="4" fill={`${ACCENT}08`} stroke={ACCENT} strokeWidth="1" />
      <text x={160} y={60} textAnchor="middle" fill={MUTED} fontSize="7" fontFamily="'DM Sans', sans-serif" letterSpacing="1">FREEBSD</text>
      <rect x={117} y={68} width={86} height={40} rx="3" fill={`${ACCENT}15`} stroke={`${ACCENT}50`} strokeWidth="0.5" />
      <text x={160} y={91} textAnchor="middle" fill={ACCENT} fontSize="11" fontFamily="'DM Sans', sans-serif" fontWeight="600">Asterisk PBX</text>
      <text x={160} y={124} textAnchor="middle" fill={MUTED} fontSize="7" fontFamily="'DM Sans', sans-serif">SIP / RTP</text>

      {/* Arrow to Phone B */}
      <Arrow x1={213} y1={90} x2={243} y2={90} />

      {/* SIP Phone B */}
      <Box x={245} y={65} w={60} h={50} label="SIP 102" small />
      <text x={275} y={127} textAnchor="middle" fill={MUTED} fontSize="7" fontFamily="'DM Sans', sans-serif">Extension</text>
    </svg>
  );
}

function VoipArchitecture() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="Server Stack" />

      {/* OS Layer */}
      <Box x={60} y={120} w={200} h={32} label="FreeBSD Operating System" />

      {/* Asterisk Layer */}
      <Box x={80} y={76} w={160} h={32} label="Asterisk PBX Server" accent />

      {/* Protocol Layer */}
      <Box x={100} y={32} w={120} h={32} label="SIP / RTP Protocols" small />

      {/* Connecting lines */}
      <Arrow x1={160} y1={64} x2={160} y2={76} />
      <Arrow x1={160} y1={108} x2={160} y2={120} />

      {/* Side annotations */}
      <Badge x={46} y={92} label="Port 5060" />
      <Badge x={274} y={92} label="sip.conf" accent />
      <Badge x={46} y={136} label="FreeBSD 14" />
    </svg>
  );
}

function VoipDetail() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="SIP Call Flow" />

      {/* Phone A column */}
      <Box x={20} y={30} w={50} h={24} label="Ext 101" small />
      <line x1={45} y1={54} x2={45} y2={165} stroke={`${MUTED}40`} strokeWidth="0.5" />

      {/* Asterisk column */}
      <Box x={130} y={30} w={60} h={24} label="Asterisk" accent small />
      <line x1={160} y1={54} x2={160} y2={165} stroke={`${MUTED}40`} strokeWidth="0.5" />

      {/* Phone B column */}
      <Box x={250} y={30} w={50} h={24} label="Ext 102" small />
      <line x1={275} y1={54} x2={275} y2={165} stroke={`${MUTED}40`} strokeWidth="0.5" />

      {/* INVITE flow */}
      <Arrow x1={48} y1={72} x2={157} y2={72} />
      <text x={100} y={67} textAnchor="middle" fill={ACCENT} fontSize="7" fontFamily="'DM Sans', sans-serif">INVITE</text>

      <Arrow x1={163} y1={90} x2={272} y2={90} />
      <text x={218} y={85} textAnchor="middle" fill={ACCENT} fontSize="7" fontFamily="'DM Sans', sans-serif">INVITE</text>

      {/* 200 OK */}
      <Arrow x1={272} y1={110} x2={163} y2={110} />
      <text x={218} y={105} textAnchor="middle" fill={TEXT_LIGHT} fontSize="7" fontFamily="'DM Sans', sans-serif">200 OK</text>

      <Arrow x1={157} y1={128} x2={48} y2={128} />
      <text x={100} y={123} textAnchor="middle" fill={TEXT_LIGHT} fontSize="7" fontFamily="'DM Sans', sans-serif">200 OK</text>

      {/* RTP Stream */}
      <line x1={48} y1={150} x2={272} y2={150} stroke={ACCENT} strokeWidth="0.8" strokeDasharray="6 3" />
      <text x={160} y={163} textAnchor="middle" fill={ACCENT} fontSize="7" fontFamily="'DM Sans', sans-serif" letterSpacing="1">RTP MEDIA STREAM</text>
    </svg>
  );
}

// ─── UniMateLK Visuals ───────────────────────────────────────────

function UniMateOverview() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="Platform Flow" />

      {/* Google OAuth */}
      <Box x={10} y={68} w={64} h={36} label="Google OAuth" small />

      <Arrow x1={74} y1={86} x2={94} y2={86} />

      {/* Profile */}
      <Box x={96} y={68} w={50} h={36} label="Profile" small />

      <Arrow x1={146} y1={86} x2={162} y2={86} />

      {/* Match Engine */}
      <rect x={164} y={60} width={60} height={52} rx="4" fill={`${ACCENT}12`} stroke={ACCENT} strokeWidth="1" />
      <text x={194} y={82} textAnchor="middle" fill={ACCENT} fontSize="8" fontFamily="'DM Sans', sans-serif" fontWeight="600">Match</text>
      <text x={194} y={96} textAnchor="middle" fill={ACCENT} fontSize="7" fontFamily="'DM Sans', sans-serif">Engine</text>

      <Arrow x1={224} y1={86} x2={244} y2={86} />

      {/* Chat */}
      <Box x={246} y={68} w={60} h={36} label="Chat Room" small />

      {/* Bottom labels */}
      <Badge x={45} y={120} label="Spring Security" />
      <Badge x={130} y={120} label="JPA / MySQL" />
      <Badge x={194} y={128} label="Preference Match" accent />
      <Badge x={276} y={120} label="WebSocket" />
    </svg>
  );
}

function UniMateArchitecture() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="Backend Stack" />

      {/* Spring Security */}
      <Box x={60} y={28} w={200} h={26} label="Spring Security / OAuth2" accent />

      <Arrow x1={160} y1={54} x2={160} y2={64} />

      {/* Service Layer */}
      <Box x={60} y={66} w={200} h={26} label="Service Layer — Business Logic" />

      <Arrow x1={160} y1={92} x2={160} y2={102} />

      {/* JPA / Hibernate */}
      <Box x={60} y={104} w={120} h={26} label="JPA / Hibernate" />

      {/* WebSocket branch */}
      <Box x={190} y={104} w={70} h={26} label="WebSocket" small />

      <Arrow x1={120} y1={130} x2={120} y2={142} />

      {/* MySQL */}
      <Cylinder cx={120} cy={144} w={60} h={22} label="MySQL" />

      {/* Side labels */}
      <Badge x={274} y={82} label="STOMP" />
      <Badge x={274} y={118} label="SockJS" />
    </svg>
  );
}

function UniMateDetail() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="Match Workflow" />

      {/* User A profile card */}
      <rect x={30} y={45} width={70} height={80} rx="4" fill={BORDER_COLOR} stroke={`${MUTED}60`} strokeWidth="0.5" />
      <circle cx={65} cy={68} r={10} fill={`${MUTED}30`} stroke={MUTED} strokeWidth="0.5" />
      <text x={65} y={90} textAnchor="middle" fill={TEXT_LIGHT} fontSize="8" fontFamily="'DM Sans', sans-serif">User A</text>
      <text x={65} y={103} textAnchor="middle" fill={MUTED} fontSize="6" fontFamily="'DM Sans', sans-serif">Preferences set</text>

      {/* User B profile card */}
      <rect x={220} y={45} width={70} height={80} rx="4" fill={BORDER_COLOR} stroke={`${MUTED}60`} strokeWidth="0.5" />
      <circle cx={255} cy={68} r={10} fill={`${MUTED}30`} stroke={MUTED} strokeWidth="0.5" />
      <text x={255} y={90} textAnchor="middle" fill={TEXT_LIGHT} fontSize="8" fontFamily="'DM Sans', sans-serif">User B</text>
      <text x={255} y={103} textAnchor="middle" fill={MUTED} fontSize="6" fontFamily="'DM Sans', sans-serif">Preferences set</text>

      {/* Connection flow in center */}
      <Arrow x1={100} y1={72} x2={143} y2={72} />
      <Arrow x1={177} y1={72} x2={220} y2={72} />

      {/* Center flow steps */}
      <Badge x={160} y={60} label="Request" />
      <Badge x={160} y={80} label="Accept" accent />
      <Badge x={160} y={100} label="Chat Unlocked" accent />

      {/* Dashed line connecting the two */}
      <line x1={100} y1={100} x2={220} y2={100} stroke={ACCENT} strokeWidth="0.6" strokeDasharray="4 3" />
    </svg>
  );
}

// ─── Personal Portfolio Visuals ──────────────────────────────────

function PortfolioOverview() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="Page Structure" />

      {/* Home (root) */}
      <Box x={120} y={28} w={80} h={28} label="Home /" accent />

      {/* Branches */}
      <line x1={120} y1={56} x2={65} y2={76} stroke={MUTED} strokeWidth="0.6" />
      <line x1={200} y1={56} x2={255} y2={76} stroke={MUTED} strokeWidth="0.6" />
      <line x1={160} y1={56} x2={160} y2={76} stroke={MUTED} strokeWidth="0.6" />

      {/* About */}
      <Box x={25} y={78} w={80} h={26} label="/about" small />

      {/* Work */}
      <Box x={120} y={78} w={80} h={26} label="/work" small />

      {/* Work Detail sub-branch */}
      <line x1={160} y1={104} x2={160} y2={120} stroke={MUTED} strokeWidth="0.6" />
      <Box x={110} y={122} w={100} h={26} label="/work/[slug]" small />

      {/* Contact indicator from About */}
      <Box x={215} y={78} w={80} h={26} label="Contact CTA" small />

      {/* Footer */}
      <line x1={160} y1={148} x2={160} y2={158} stroke={`${MUTED}40`} strokeWidth="0.5" />
      <text x={160} y={168} textAnchor="middle" fill={`${MUTED}60`} fontSize="7" fontFamily="'DM Sans', sans-serif">Footer — all pages</text>
    </svg>
  );
}

function PortfolioArchitecture() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs />
      <SectionLabel x={10} y={16} label="Component Architecture" />

      {/* Pages layer */}
      <Box x={40} y={30} w={240} h={26} label="Pages — Home, About, Work, Work/[slug]" small />

      <Arrow x1={160} y1={56} x2={160} y2={66} />

      {/* Components layer */}
      <Box x={40} y={68} w={240} h={26} label="Components — Hero, CTA, Footer, ProjectCard" accent />

      <Arrow x1={160} y1={94} x2={160} y2={104} />

      {/* Data layer */}
      <Box x={40} y={106} w={240} h={26} label="Data — projects.js, skills.js, services.js" small />

      <Arrow x1={160} y1={132} x2={160} y2={142} />

      {/* Utils/Animations */}
      <Box x={40} y={144} w={120} h={24} label="GSAP / Framer Motion" small />
      <Box x={170} y={144} w={110} h={24} label="Lenis / Tailwind" small />
    </svg>
  );
}

function PortfolioDetail() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <SectionLabel x={10} y={16} label="Tech Stack" />

      {/* Tech blocks arranged in a grid */}
      {[
        { label: "Next.js", x: 30, y: 40, accent: true },
        { label: "React", x: 130, y: 40, accent: false },
        { label: "Tailwind CSS", x: 230, y: 40, accent: false },
        { label: "GSAP", x: 30, y: 88, accent: true },
        { label: "Framer Motion", x: 130, y: 88, accent: false },
        { label: "Lenis", x: 230, y: 88, accent: false },
      ].map((tech, i) => (
        <g key={i}>
          <rect
            x={tech.x}
            y={tech.y}
            width={80}
            height={36}
            rx="4"
            fill={tech.accent ? `${ACCENT}12` : BORDER_COLOR}
            stroke={tech.accent ? ACCENT : `${MUTED}40`}
            strokeWidth={tech.accent ? "1" : "0.5"}
          />
          <text
            x={tech.x + 40}
            y={tech.y + 18}
            textAnchor="middle"
            dominantBaseline="central"
            fill={tech.accent ? ACCENT : TEXT_LIGHT}
            fontSize="9"
            fontFamily="'DM Sans', sans-serif"
          >
            {tech.label}
          </text>
        </g>
      ))}

      {/* Connecting dots */}
      <line x1={110} y1={58} x2={130} y2={58} stroke={`${MUTED}30`} strokeWidth="0.5" strokeDasharray="2 2" />
      <line x1={210} y1={58} x2={230} y2={58} stroke={`${MUTED}30`} strokeWidth="0.5" strokeDasharray="2 2" />
      <line x1={110} y1={106} x2={130} y2={106} stroke={`${MUTED}30`} strokeWidth="0.5" strokeDasharray="2 2" />
      <line x1={210} y1={106} x2={230} y2={106} stroke={`${MUTED}30`} strokeWidth="0.5" strokeDasharray="2 2" />

      <Badge x={160} y={148} label="Built for GitHub & Deployment" accent />
    </svg>
  );
}

// ─── Visual Registry ─────────────────────────────────────────────

const projectVisuals = {
  nexora: {
    gradient: "from-accent/15 via-accent/5 to-transparent",
    overview: NexoraOverview,
    architecture: NexoraArchitecture,
    detail: NexoraDetail,
  },
  "pfsense-firewall-lab": {
    gradient: "from-accent/15 via-accent/5 to-transparent",
    overview: PfSenseOverview,
    architecture: PfSenseArchitecture,
    detail: PfSenseDetail,
  },
  "freebsd-asterisk-voip": {
    gradient: "from-accent/15 via-accent/5 to-transparent",
    overview: VoipOverview,
    architecture: VoipArchitecture,
    detail: VoipDetail,
  },
  unimatelk: {
    gradient: "from-accent/15 via-accent/5 to-transparent",
    overview: UniMateOverview,
    architecture: UniMateArchitecture,
    detail: UniMateDetail,
  },
  "personal-portfolio": {
    gradient: "from-accent/20 via-accent/5 to-transparent",
    overview: PortfolioOverview,
    architecture: PortfolioArchitecture,
    detail: PortfolioDetail,
  },
};

// ─── Default Fallback Visual ─────────────────────────────────────

function DefaultVisual() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <text
        x="160"
        y="90"
        textAnchor="middle"
        dominantBaseline="central"
        fill={ACCENT}
        fontSize="12"
        fontFamily="'Syne', sans-serif"
        fontWeight="700"
        letterSpacing="3"
      >
        PROJECT
      </text>
    </svg>
  );
}

// ─── Main Component ──────────────────────────────────────────────

export default function ProjectVisual({
  slug,
  className = "",
  animated = true,
  variant = "overview",
}) {
  const config = projectVisuals[slug];
  const gradient = config?.gradient || "from-accent/20 via-accent/5 to-transparent";

  let VisualComponent = DefaultVisual;
  if (config) {
    VisualComponent = config[variant] || config.overview || DefaultVisual;
  }

  return (
    <VisualFrame slug={slug} className={className} animated={animated} gradient={gradient}>
      <VisualComponent />
    </VisualFrame>
  );
}
