import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Briefcase,
  Box,
  FileText,
  Handshake,
  Heart,
  Home,
  Info,
  Instagram,
  Facebook,
  Landmark,
  Leaf,
  MessageCircle,
  Palette,
  Search,
  Shield,
  ShirtIcon,
  ShoppingBag,
  Sparkles,
  Star,
  Tag,
  Truck,
  User,
  Users,
} from "lucide-react";

import imgRiveSoft from "@/assets/rivesoft/logo.png"
import imgLogo from "@/assets/logo.png"

import sizeMic from "@/assets/sizes/mic.svg";
import sizeMediu from "@/assets/sizes/mediu.svg";
import sizeNormal from "@/assets/sizes/normal.svg";
import sizeOver from "@/assets/sizes/over.svg";

import hero from "@/assets/hero.png";
import audPersoane from "@/assets/aud-persoane.jpg";
import audCompanii from "@/assets/aud-companii.jpg";
import audInstitutii from "@/assets/aud-institutii.jpg";
import prodTricouri from "@/assets/clothes/tshirt.png";
import prodHanorace from "@/assets/clothes/hoodie.png";
import prodPolo from "@/assets/clothes/tshirt-polo.png";
import prodSepci from "@/assets/clothes/cap.png";
import prodGenti from "@/assets/clothes/bag.png";
import prodEchipamente from "@/assets/clothes/jacket.png";
import dtf from "@/assets/dtf-printing.jpg";
import fabrics from "@/assets/fabric-rolls.jpg";
import contactMockup from "@/assets/formular.png";
import separatorPRNT from "@/assets/separatorPRNT.png";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { CookieSettingsLink } from "@/components/cookie-settings-link";

export const metadata: Metadata = {
  title: "PRNT — Materiale textile personalizate pentru orice nevoie",
  description:
    "Tricouri, hanorace, polo, șepci, genți și echipamente de lucru personalizate prin imprimare DTF. Pentru persoane fizice, companii și instituții publice.",
  openGraph: {
    title: "PRNT — Materiale textile personalizate",
    description:
      "Printuri românești pentru nevoile tuturor. Cere oferta pentru proiectul tău textil.",
  },
};

const benefits = [
  {
    icon: ShirtIcon,
    title: "Produse de calitate",
    text: "Colaborăm cu producători de încredere pentru materiale premium.",
  },
  {
    icon: Palette,
    title: "Personalizare completă",
    text: "Alegem împreună culorile, materialele și detaliile care reprezintă brandul tău.",
  },
  {
    icon: Tag,
    title: "Prețuri corecte",
    text: "Negociem cele mai bune condiții pentru bugetul și cantitatea ta.",
  },
  {
    icon: Handshake,
    title: "Parteneriat pe termen lung",
    text: "Ne pasă de clienții noștri și construim relații bazate pe încredere.",
  },
  {
    icon: Truck,
    title: "Livrare la timp",
    text: "Respectăm termenele și ne asigurăm că totul ajunge în siguranță.",
  },
  {
    icon: Leaf,
    title: "Soluții sustenabile",
    text: "Promovăm materiale durabile și producție responsabilă față de mediu.",
  },
];

const audiences = [
  {
    img: audPersoane,
    icon: User,
    title: "Persoane fizice",
    text: "Pentru ideile tale, pasiunile tale, evenimentele tale.",
  },
  {
    img: audCompanii,
    icon: Briefcase,
    title: "Companii",
    text: "Pentru echipa ta, brandul tău, clienții tăi și campaniile tale.",
  },
  {
    img: audInstitutii,
    icon: Landmark,
    title: "Instituții publice",
    text: "Pentru proiecte, evenimente, programe și campanii.",
  },
];

const products = [
  { img: prodTricouri, name: "Tricouri" },
  { img: prodHanorace, name: "Hanorace" },
  { img: prodPolo, name: "Polo" },
  { img: prodSepci, name: "Șepci" },
  { img: prodGenti, name: "Genți textile" },
  { img: prodEchipamente, name: "Echipamente de lucru" },
];

const steps = [
  {
    icon: MessageCircle,
    n: "1",
    title: "Ne contactezi",
    text: "Ne spui ce ai nevoie.",
  },
  {
    icon: Search,
    n: "2",
    title: "Discutăm proiectul",
    text: "Stabilim toate detaliile.",
  },
  {
    icon: FileText,
    n: "3",
    title: "Primești oferta",
    text: "Îți trimitem oferta personalizată.",
  },
  {
    icon: ShirtIcon,
    n: "4",
    title: "Imprimăm",
    text: "Realizăm imprimarea la calitate înaltă.",
  },
  { icon: Box, n: "5", title: "Livrăm", text: "Primești comanda la timp." },
];

const values = [
  {
    icon: Star,
    title: "Experiență",
    text: "Cunoaștem piața și știm cum să găsim cele mai bune soluții.",
  },
  {
    icon: Users,
    title: "Dedicare",
    text: "Fiecare proiect este important, indiferent de mărime.",
  },
  {
    icon: Shield,
    title: "Transparență",
    text: "Comunicăm clar și corect la fiecare pas.",
  },
  {
    icon: Heart,
    title: "Pasiune",
    text: "Suntem pasionați de ceea ce facem și se vede în fiecare proiect.",
  },
  {
    icon: Award,
    title: "Producție românească",
    text: "Susținem producția locală și colaborăm cu parteneri din România.",
  },
];

function IconHoodie({ className }: { className?: string }) {
  return (
    <svg fill="currentColor" className={className} height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 512 512">
<g transform="translate(1 1)">
	<g>
		<g>
			<path d="M436.162,289.133c-7.68-83.627-23.04-147.627-46.933-184.32c-1.707-1.707-11.947-13.653-15.36-17.92
				c-0.854-0.854-1.796-1.474-2.777-1.897c-8.632-8.406-16.525-14.493-23.677-16.877c0.853-9.387-1.707-20.48-7.68-30.72
				C326.935,13.507,298.775-1,254.402-1s-72.533,14.507-85.333,38.4c-5.973,10.24-8.533,21.333-8.533,30.72
				c-6.827,2.56-14.507,8.533-24.747,18.773c-3.413,4.267-7.68,7.68-11.093,11.947c-1.707,2.56-3.413,4.267-4.267,5.12
				c-23.893,37.547-39.253,101.547-46.933,185.173c-6.827,66.56-7.68,136.533-6.827,197.973c0,0.291,0,0.57,0,0.853
				c0,3.87,0,7.06,0,10.24c0,1.251,0,2.498,0,3.413c0,0.333,0,0.625,0,0.853c0,4.267,4.267,8.533,8.533,8.533h34.133
				c3.413,0,6.827-1.707,7.68-5.12l22.369-53.994c1.33,1.242,2.692,2.441,4.084,3.597v38.45c0,9.387,7.68,17.067,17.067,17.067
				h187.733c9.387,0,17.067-7.68,17.067-17.067v-37.757c1.689-1.369,3.338-2.796,4.938-4.29l18.002,43.453l3.514,10.541
				c1.707,3.413,4.267,5.12,7.68,5.12h0.853h33.28h0.853c4.267,0,8.533-3.413,8.533-8.533c0-0.853,0-1.707,0-4.267
				c0-3.413,0-6.827,0-11.093C444.695,425.667,442.989,355.693,436.162,289.133z M419.095,291.693
				c4.837,53.202,6.874,108.638,6.569,160.427h-38.968l-4.294-10.24c0.065-1.606,0.126-3.196,0.189-4.794
				c0.389-0.962,0.665-1.924,0.665-2.886c3.413-104.96,2.56-191.147-0.853-261.12c-0.693-20.108-1.95-37.398-3.312-51.872
				C398.659,155.371,411.429,215.026,419.095,291.693z M425.069,493.933h-19.627l-10.24-25.6h30.282
				c-0.103,6.613-0.236,13.171-0.415,19.627C425.069,490.224,425.069,491.823,425.069,493.933z M90.562,290.84
				c7.562-74.779,20.092-133.821,39.211-169.017c-1.385,15.054-2.668,32.42-3.371,52.11c-1.65,44.538-2.588,96.175-2.136,155.343
				c0.157,34.873,0.837,72.135,2.136,111.751l-4.294,10.24H83.992C83.697,399.806,85.735,343.933,90.562,290.84z M104.215,493.933
				H84.589c0-1.517,0-3.708,0-5.973c0-0.284,0-0.568,0-0.853c0-5.768,0-12.266,0-18.773h30.362L104.215,493.933z M348.269,493.933
				H160.535v-27.212c3.198,1.63,6.489,3.073,9.863,4.322c0.074,0.028,0.147,0.056,0.222,0.084c0.769,0.282,1.543,0.553,2.32,0.815
				c0.098,0.033,0.194,0.068,0.292,0.101c9.489,3.165,19.574,4.824,29.971,4.824h103.253c14.851,0,29.068-3.379,41.813-9.711
				V493.933z M320.043,458.592c-0.323,0.057-0.645,0.118-0.969,0.171c-0.397,0.066-0.796,0.124-1.194,0.184
				c-0.587,0.087-1.174,0.168-1.763,0.242c-0.266,0.033-0.531,0.069-0.797,0.1c-0.882,0.101-1.766,0.188-2.651,0.26
				c-0.169,0.014-0.339,0.023-0.509,0.035c-0.754,0.055-1.509,0.1-2.264,0.133c-0.238,0.011-0.476,0.021-0.714,0.03
				c-0.908,0.032-1.817,0.054-2.726,0.054H203.202c-0.911,0-1.822-0.022-2.733-0.054c-0.229-0.008-0.458-0.018-0.687-0.029
				c-0.807-0.036-1.613-0.082-2.419-0.143c-0.106-0.008-0.213-0.014-0.319-0.022c-0.964-0.077-1.926-0.172-2.887-0.286
				c-0.058-0.007-0.115-0.015-0.172-0.022c-0.965-0.116-1.928-0.249-2.889-0.402c-0.007-0.001-0.015-0.002-0.022-0.003
				c-8.013-1.279-15.867-3.834-23.243-7.664c-0.038-0.02-0.075-0.04-0.112-0.06c-0.717-0.374-1.427-0.768-2.135-1.166
				c-0.315-0.178-0.631-0.355-0.943-0.538c-0.231-0.134-0.459-0.277-0.69-0.414c-7.752-4.656-14.723-10.758-20.482-18.21
				c-1.44-43.552-2.118-83.751-2.167-120.816c0.065-48.697,1.162-92.345,3.021-130.918c1.554-38.862,4.524-69.22,6.331-81.42
				c5.819-5.786,10.809-9.947,13.876-11.662c2.178,3.847,5.174,8.198,8.807,12.868c10.24,12.8,23.04,20.48,38.4,20.48
				c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533c-9.387,0-17.92-5.12-25.6-13.653c-2.56-3.413-5.12-6.827-6.827-10.24
				c-1.091-2.182-1.485-3.661-1.85-4.671c-0.433-8.797,1.378-18.214,6.116-26.902c10.24-19.627,32.427-30.72,70.827-30.72
				c38.4,0,60.587,11.093,70.827,29.867c5.12,9.387,6.827,19.627,5.973,28.16c-0.006,0.045-0.005,0.089-0.01,0.134
				c-1.918,3.496-6.523,10.852-8.524,13.519c-7.68,8.533-16.213,13.653-25.6,13.653c-5.12,0-8.533,3.413-8.533,8.533
				s3.413,8.533,8.533,8.533c15.36,0,28.16-7.68,38.4-20.48c3.71-4.24,6.76-8.809,8.949-12.889
				c3.377,1.735,8.944,6.036,14.944,12.036c0,0.853,0.853,10.24,1.707,16.213c1.707,16.213,3.413,36.693,4.267,60.587
				c3.413,68.267,4.267,153.6,0.853,256.853C354.567,445.827,338.014,455.384,320.043,458.592z"/>
			<path d="M241.602,101.4h25.6c5.12,0,10.24-2.56,13.653-5.973l20.48-26.453c8.533-11.093,0.853-27.307-13.653-27.307h-66.56
				c-14.507,0-22.187,16.213-13.653,27.307l20.48,25.6C231.362,98.84,236.482,101.4,241.602,101.4z M287.682,58.733l-20.48,25.6
				h-25.6l-20.48-25.6H287.682z"/>
			<path d="M228.802,203.8c5.12,0,8.533-3.413,8.533-8.533V127c0-5.12-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533
				v68.267C220.269,200.387,223.682,203.8,228.802,203.8z"/>
			<path d="M271.469,127v68.267c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533V127c0-5.12-3.413-8.533-8.533-8.533
				S271.469,121.88,271.469,127z"/>
			<path d="M339.735,391.533c-17.92,0-34.133-22.187-34.133-51.2c0-5.12-3.413-8.533-8.533-8.533h-42.667h-42.667
				c-5.12,0-8.533,3.413-8.533,8.533c0,29.013-16.213,51.2-34.133,51.2c-5.12,0-8.533,3.413-8.533,8.533V434.2
				c0,5.12,3.413,8.533,8.533,8.533h85.333h85.333c5.12,0,8.533-3.413,8.533-8.533v-34.133
				C348.269,394.947,344.855,391.533,339.735,391.533z M177.602,407.747c22.187-5.12,39.253-29.013,42.667-58.88h25.6v76.8h-68.267
				V407.747z M331.202,425.667h-68.267v-76.8h25.6c3.413,29.867,20.48,53.76,42.667,58.88V425.667z"/>
		</g>
	</g>
</g>
</svg>
  );
}

function IconCap({ className }: { className?: string }) {
  return (
    <svg fill="currentColor" className={className} height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 512 512">
<g>
	<g>
		<path d="M363.975,154.131v-3.309c0-9.807-3.818-19.036-10.776-26.016c-6.952-6.932-16.182-10.75-25.99-10.75
			c-20.28,0-36.778,16.493-36.778,36.766v3.022h-3.122c-86.786,0-157.391,70.606-157.391,157.391v61.73H12.488
			C5.591,372.966,0,378.557,0,385.454c0,6.897,5.591,12.488,12.488,12.488h129.917h103.113c0.009,0,0.017,0.001,0.026,0.001
			c0.008,0,0.016-0.001,0.024-0.001h161.508c0.008,0,0.016,0.001,0.024,0.001c0.009,0,0.018-0.001,0.026-0.001h92.385
			c6.897,0,12.488-5.591,12.488-12.488v-74.219C512,227.596,446.417,158.996,363.975,154.131z M315.406,150.823h0.001
			c0-6.5,5.294-11.789,11.802-11.789c3.148,0,6.116,1.229,8.327,3.434c2.232,2.238,3.461,5.205,3.461,8.354v3.022h-23.591V150.823z
			 M395.407,372.967H257.22c-1.036-20.849-1.577-67.405,10.188-111.056c1.796-6.66-2.148-13.512-8.808-15.308
			c-6.656-1.796-13.514,2.148-15.308,8.808c-12.505,46.388-12.214,94.555-11.106,117.556h-77.292v-61.73
			c0-73.014,59.401-132.415,132.415-132.415h15.61h25.719C397.406,215.141,397.223,335.504,395.407,372.967z M487.023,372.967
			h-66.545c1.838-36.94,1.604-138.061-50.151-193.208c65.63,7.799,116.695,63.783,116.695,131.477V372.967z"/>
	</g>
</g>
<g>
	<g>
		<path d="M267.839,208.807c-6.894,0-12.488,5.595-12.488,12.488s5.595,12.488,12.488,12.488c6.894,0,12.488-5.595,12.488-12.488
			S274.733,208.807,267.839,208.807z"/>
	</g>
</g>
</svg>
  );
}

function IconPolo({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 512.853 512.853">
<g transform="translate(1 1)">
	<g>
		<g>
			<path d="M255.853,161.133c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533
				S260.973,161.133,255.853,161.133z"/>
			<path d="M255.853,195.267c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533
				C264.387,198.68,260.973,195.267,255.853,195.267z"/>
			<path d="M509.293,207.213L418.037,91.069c-0.882-15.422-23.822-31.649-81.117-49.402l-23.069-22.246l-1.677-3.354
				C307.053,4.973,296.813-1,285.72-1h-58.88c-11.093,0-21.333,5.973-26.453,16.213l-2.276,3.982L174.787,42.52
				c-55.091,17.07-77.724,32.729-80.736,46.978L1.56,207.213C-1.853,210.627-1,216.6,3.267,219.16L63,261.827
				c2.56,1.707,5.973,1.707,8.533,0.853l47.787-25.259V503.32c0,5.12,3.413,8.533,8.533,8.533h256c5.12,0,8.533-3.413,8.533-8.533
				V237.872l46.933,24.808c2.56,1.707,5.973,0.853,8.533-0.853l59.733-42.667C511.853,216.6,512.707,210.627,509.293,207.213z
				 M201.24,39.107l26.453,58.027l-18.773,9.387l-20.48-54.613L201.24,39.107z M309.883,39.376l12.531,12.531l-20.48,54.613
				l-18.874-9.027L309.883,39.376z M225.987,16.067h58.88c5.12,0,9.387,2.56,11.093,6.827l1.707,1.707l-41.813,90.453l-7.064-15.282
				c-0.074-0.891-0.273-1.782-0.616-2.638l-33.759-73.282l0.479-0.958C217.453,18.627,221.72,16.067,225.987,16.067z M68.973,244.76
				l-47.787-34.133l83.139-106.045c4.031,4.423,7.608,12.896,10.727,24.125c1.707,6.827,2.56,14.507,3.413,23.04
				c0,2.56,0.853,5.12,0.853,7.68c0,1.707,0,2.56,0,2.56v56.32L68.973,244.76z M136.387,493.933v-332.8c0-0.853,0-1.707,0-3.413
				c0-2.56,0-5.12-0.853-8.533c-0.853-8.533-2.56-17.067-4.267-24.747c-3.997-15.99-9.555-28.338-17.892-35.015
				c0.844-0.844,1.697-1.697,3.385-3.385c10.207-7.852,28.369-16.426,57.128-25.722l23.086,61.562
				c1.707,5.12,7.68,6.827,11.947,4.267l26.651-13.651l12.602,27.304c3.413,6.827,12.8,6.827,15.36,0l12.602-27.304l26.651,13.651
				c4.267,2.56,10.24,0,11.947-4.267l23.086-61.562c28.758,9.296,46.921,17.871,57.128,25.722c1.551,0.775,2.396,2.249,3.178,3.153
				c-8.277,6.619-14.314,19.066-17.685,35.247c-0.213,0.96-0.427,1.933-0.638,2.918c-1.058,4.925-2.075,10.142-2.842,15.442
				c-0.307,2.12-0.573,4.253-0.787,6.387c0,2.56-0.853,5.973-0.853,8.533c0,1.707,0,2.56,0,3.413v62.293c0,0,0,0.001,0,0.001
				v270.506H136.387z M442.733,243.907l-50.347-25.6v-57.173c0,0,0-0.853,0-2.56c0-2.56,0-5.12,0.853-7.68
				c0.853-7.68,1.707-15.36,3.413-23.04c1.805-7.823,4.459-14.365,7.064-19.343c1.153-1.947,2.361-3.58,3.601-4.862l83.202,106.125
				L442.733,243.907z"/>
		</g>
	</g>
</g>
</svg>
  );
}

function IconVest({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 512 512">
<g transform="translate(1 1)">
	<g>
		<g>
			<path d="M439.875,250.811c-8.796-53.638-28.134-108.601-49.468-145.177l-0.624-0.924c-0.879-1.136-2.427-3.063-4.501-5.526
				c-3.448-4.096-7.129-8.206-10.91-12.08c-0.042-0.043-0.086-0.079-0.128-0.121c-9.404-9.615-17.534-16.203-25.063-18.76
				c-0.265-9.652-2.655-20.307-8.416-30.694C327.329,13.303,299.504-1,255.037-1s-72.292,14.303-85.729,38.527
				c-5.75,10.367-8.142,21.001-8.414,30.638c-6.62,2.34-13.673,8.174-22.732,17.321c-0.501,0.504-1.006,1.017-1.525,1.547
				c-0.024,0.024-0.05,0.045-0.074,0.07c-3.781,3.874-7.462,7.984-10.91,12.08c-2.074,2.463-3.622,4.391-4.501,5.526
				c-0.003,0.005-0.006,0.01-0.009,0.015c-0.435,0.564-0.79,1.134-1.072,1.705c-22.245,35.405-41.209,89.573-49.964,144.497
				c-2.482,15.558,9.568,29.674,25.323,29.674h29.319c-0.215,33.671,0.103,70.108,1.026,109.377
				c0.026,1.125,0.053,2.253,0.081,3.382c0.033,1.346,0.065,2.691,0.099,4.044c0.065,2.605,0.133,5.221,0.204,7.846
				c0.002,0.089,0.005,0.178,0.007,0.267c0.256,9.523,0.545,19.173,0.872,28.969c0.058,1.748,0.652,3.435,1.701,4.834
				c0.542,0.723,1.096,1.434,1.656,2.138c0.064,0.081,0.13,0.16,0.195,0.24c0.477,0.596,0.961,1.185,1.451,1.768
				c0.142,0.168,0.286,0.335,0.429,0.502c0.419,0.49,0.842,0.977,1.27,1.457c0.178,0.199,0.356,0.398,0.535,0.595
				c0.401,0.443,0.807,0.881,1.216,1.315c0.198,0.211,0.396,0.422,0.596,0.63c0.401,0.418,0.808,0.831,1.216,1.241
				c0.208,0.209,0.414,0.42,0.623,0.626c0.424,0.418,0.855,0.829,1.286,1.238c0.197,0.187,0.39,0.377,0.588,0.562
				c0.59,0.55,1.187,1.093,1.791,1.627c0.358,0.317,0.723,0.626,1.086,0.938c0.265,0.227,0.527,0.457,0.794,0.681
				c0.21,0.176,0.42,0.352,0.631,0.526v38.529c0,9.425,7.637,17.067,17.067,17.067h187.733c9.423,0,17.067-7.643,17.067-17.067
				v-37.835c0.469-0.378,0.939-0.756,1.401-1.144c0.038-0.032,0.075-0.065,0.112-0.096c0.987-0.829,1.955-1.683,2.909-2.554
				c0.202-0.185,0.408-0.366,0.609-0.553c0.346-0.321,0.685-0.65,1.026-0.977c0.28-0.268,0.562-0.536,0.839-0.808
				c0.315-0.31,0.627-0.625,0.938-0.94c0.296-0.299,0.591-0.598,0.883-0.901c0.296-0.307,0.59-0.618,0.882-0.93
				c0.301-0.321,0.6-0.645,0.897-0.971c0.279-0.306,0.557-0.613,0.832-0.923c0.306-0.345,0.608-0.694,0.91-1.044
				c0.26-0.302,0.521-0.602,0.777-0.908c0.317-0.378,0.629-0.761,0.94-1.145c0.234-0.288,0.471-0.573,0.702-0.864
				c0.378-0.477,0.749-0.961,1.119-1.447c0.147-0.193,0.299-0.38,0.444-0.574c1.05-1.399,1.644-3.088,1.703-4.837
				c1.886-56.591,2.588-107.819,2.293-153.884h28.381C430.371,280.6,442.434,266.407,439.875,250.811z M306.235,306.2
				c0-68.119,9.292-132.336,25.598-183.445V178.2c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533V87.44
				c1.34,0.93,2.814,2.047,4.393,3.35c0.11,0.092,0.219,0.182,0.33,0.276c0.26,0.216,0.527,0.447,0.791,0.673
				c1.815,1.56,3.746,3.327,5.75,5.294c0.265,2.207,0.562,4.852,0.884,7.948c0.81,7.785,1.637,16.991,2.444,27.621
				c0.024,0.322,0.049,0.647,0.073,0.972c0.09,1.2,0.18,2.418,0.27,3.655c0.022,0.308,0.045,0.618,0.067,0.927
				c0.141,1.964,0.28,3.953,0.416,5.963c0.022,0.318,0.043,0.633,0.065,0.953c0.009,0.14,0.018,0.282,0.028,0.422
				c0.107,1.593,0.211,3.208,0.315,4.83c0.057,0.899,0.115,1.798,0.172,2.705c0.098,1.569,0.194,3.154,0.289,4.749
				c0.062,1.043,0.123,2.093,0.184,3.147c0.077,1.336,0.153,2.682,0.228,4.036c0.07,1.262,0.139,2.533,0.207,3.81
				c0.066,1.243,0.132,2.492,0.197,3.75c0.063,1.219,0.125,2.444,0.186,3.676c0.078,1.571,0.154,3.151,0.229,4.744
				c0.035,0.737,0.07,1.472,0.104,2.214c0.098,2.135,0.194,4.291,0.287,6.466c0.024,0.558,0.048,1.116,0.071,1.676
				c0.1,2.373,0.198,4.765,0.292,7.185c0.011,0.273,0.021,0.548,0.032,0.821c0.748,19.431,1.305,40.392,1.632,62.91
				c0.001,0.053,0.002,0.106,0.002,0.159c0.04,2.773,0.075,5.581,0.108,8.402c0.119,10.24,0.191,20.769,0.212,31.602
				c-0.002,9.635-0.046,19.444-0.132,29.424h-62.332C306.401,323.33,306.235,314.797,306.235,306.2z M307.549,348.867h61.282
				c-0.218,16.629-0.55,33.688-1.003,51.2h-55.395C310.207,383.564,308.573,366.445,307.549,348.867z M364.603,433.896
				c-1.34,1.513-2.734,2.969-4.18,4.364c-0.111,0.107-0.222,0.215-0.334,0.322c-1.499,1.429-3.052,2.794-4.655,4.091
				c-0.064,0.052-0.127,0.104-0.191,0.155c-0.561,0.451-1.135,0.883-1.707,1.318c-0.387,0.202-0.768,0.433-1.138,0.704
				c-8.811,6.446-18.765,10.922-29.229,13.203c-3.171-13.127-5.907-26.811-8.215-40.919h52.409
				c-0.138,4.643-0.282,9.31-0.436,14.019c-0.629,0.782-1.277,1.546-1.934,2.299C364.863,433.6,364.733,433.748,364.603,433.896z
				 M184.232,45.806c10.23-18.443,32.205-29.739,70.804-29.739c38.599,0,60.575,11.297,70.804,29.739
				c5.307,9.568,6.791,19.713,6.156,27.973c-0.034,0.255-0.043,0.501-0.06,0.751c-0.048,0.322-0.079,0.65-0.09,0.983
				c-26.94,57.573-42.679,140.969-42.679,230.687c0,54.682,5.898,107.263,16.878,153.6H204.028
				c10.978-46.334,16.872-98.913,16.872-153.6c0-89.701-15.742-173.105-42.676-230.679c-0.002-0.059-0.01-0.119-0.014-0.178
				c-0.01-0.19-0.021-0.379-0.044-0.565c-0.007-0.056-0.005-0.111-0.013-0.167C177.442,65.519,178.925,55.374,184.232,45.806z
				 M203.373,331.8h-61.467c-0.086-9.97-0.132-19.785-0.136-29.444c0.02-10.324,0.088-20.373,0.197-30.16
				c0-0.011,0.002-0.022,0.002-0.033c0.374-33.113,1.235-62.994,2.474-89.701c0.002-0.038,0.004-0.075,0.005-0.113
				c0.238-5.118,0.49-10.113,0.754-14.998c0.016-0.291,0.031-0.584,0.047-0.874c0.123-2.246,0.249-4.465,0.377-6.661
				c0.021-0.357,0.042-0.714,0.063-1.07c0.132-2.245,0.267-4.466,0.405-6.659c0.01-0.157,0.02-0.312,0.03-0.469
				c0.3-4.741,0.612-9.365,0.937-13.863c0.926-12.838,1.887-23.754,2.826-32.772c0.323-3.103,0.621-5.755,0.886-7.965
				c2.67-2.653,5.113-4.905,7.278-6.757c1.111-0.937,2.153-1.768,3.117-2.49v90.43c0,4.713,3.82,8.533,8.533,8.533
				s8.533-3.82,8.533-8.533v-55.442c16.306,51.113,25.6,115.334,25.6,183.442C203.833,314.797,203.667,323.331,203.373,331.8z
				 M142.956,394.294c-0.077-2.991-0.145-5.937-0.204-8.857c-0.043-1.776-0.07-3.041-0.139-6.337
				c-0.033-1.573-0.033-1.573-0.067-3.147c-0.054-2.677-0.072-3.604-0.187-9.978c-0.036-1.941-0.062-3.576-0.11-6.867
				c-0.013-0.83-0.013-0.83-0.026-1.653c-0.01-0.617-0.01-0.617-0.02-1.233c-0.034-2.13-0.058-3.653-0.077-4.932
				c-0.007-0.52-0.015-1.043-0.022-1.563c-0.004-0.291-0.008-0.577-0.011-0.861h60.425c-1.023,17.578-2.658,34.698-4.885,51.2H143.1
				C143.04,397.785,143.001,396.205,142.956,394.294z M144.007,431.154c-0.154-4.715-0.298-9.38-0.436-14.02h51.546
				c-2.297,14.043-5.017,27.665-8.169,40.736c-0.413-0.095-0.827-0.182-1.238-0.283c-0.129-0.031-0.258-0.064-0.387-0.096
				c-9.887-2.498-19.258-6.975-27.559-13.215c-0.369-0.277-0.749-0.515-1.136-0.723c-0.369-0.287-0.744-0.567-1.108-0.861
				c-0.083-0.067-0.165-0.134-0.247-0.201c-1.536-1.253-3.025-2.569-4.464-3.942c-0.159-0.152-0.317-0.304-0.475-0.458
				c-0.665-0.645-1.322-1.301-1.965-1.971c-0.053-0.056-0.107-0.112-0.16-0.167c-0.616-0.647-1.217-1.309-1.812-1.979
				c-0.198-0.223-0.395-0.448-0.59-0.673c-0.536-0.618-1.064-1.245-1.582-1.882C144.153,431.328,144.079,431.242,144.007,431.154z
				 M95.429,263.533c-5.259,0-9.297-4.73-8.469-9.92c7.998-50.175,24.851-99.665,44.127-132.547
				c-1.305,14.919-2.503,32.409-3.51,52.566c-1.362,27.266-2.275,57.218-2.67,89.901H95.429z M161.17,493.933v-27.332
				c13.04,6.655,27.628,10.265,42.667,10.265h103.262c14.708,0,28.985-3.449,41.805-9.826v26.893H161.17z M414.567,263.533h-28.538
				c-0.396-32.683-1.308-62.635-2.67-89.901c-0.99-19.808-2.164-37.047-3.442-51.795c18.584,34.591,35.248,83.751,43.117,131.737
				C423.888,258.778,419.845,263.533,414.567,263.533z"/>
			<path d="M226.179,91.792c4.87,6.074,12.218,9.611,19.992,9.611h17.724c7.774,0,15.123-3.537,19.987-9.604l17.925-22.407
				c8.945-11.164,0.979-27.722-13.328-27.722h-66.893c-14.307,0-22.273,16.558-13.324,27.727L226.179,91.792z M288.476,58.737
				l-17.912,22.39c-1.629,2.031-4.081,3.21-6.669,3.21h-17.724c-2.589,0-5.042-1.18-6.671-3.213l-17.91-22.387H288.476z"/>
		</g>
	</g>
</g>
</svg>
  );
}

function IconBag({className}:{className? : string}){
  return (
    <svg className={className} fill="currentColor" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 64 64">
<g>
	<path d="M54,19h-7V7c0-0.016-0.008-0.029-0.009-0.045c-0.005-0.111-0.024-0.22-0.065-0.324c-0.003-0.008-0.003-0.016-0.007-0.024
		c-0.038-0.088-0.088-0.172-0.151-0.247l-5-6C41.578,0.132,41.297,0,41,0H24c-0.265,0-0.52,0.105-0.707,0.293l-6,6
		c0,0-0.001,0.001-0.002,0.002c-0.083,0.083-0.144,0.182-0.192,0.285c-0.014,0.03-0.022,0.062-0.033,0.094
		c-0.03,0.086-0.048,0.173-0.054,0.264C17.011,6.96,17,6.978,17,7v12h-7c-0.552,0-1,0.448-1,1v39c0,2.757,2.243,5,5,5h36
		c2.757,0,5-2.243,5-5V20C55,19.448,54.552,19,54,19z M25,19V8h14v11H25z M41,8h4v11h-4V8z M24.414,2h16.118l3.333,4H40H24h-3.586
		L24.414,2z M19,8h4v11h-4V8z M53,59c0,1.654-1.346,3-3,3H14c-1.654,0-3-1.346-3-3V21h7h6h16h6h7V59z"/>
	<path d="M44,41H33v-3.026c1.478-0.09,4.199-0.516,6.077-2.393c2.629-2.629,2.423-6.943,2.413-7.126
		c-0.028-0.509-0.435-0.915-0.943-0.943c-0.184-0.009-4.497-0.216-7.126,2.413c-0.619,0.619-1.076,1.332-1.42,2.061
		c-0.344-0.729-0.801-1.442-1.42-2.061c-2.628-2.628-6.942-2.42-7.126-2.413c-0.509,0.028-0.915,0.435-0.943,0.943
		c-0.01,0.183-0.216,4.497,2.413,7.126c1.877,1.878,4.599,2.304,6.077,2.394V41H20c-0.552,0-1,0.448-1,1v5c0,0.552,0.448,1,1,1h2v4
		c0,3.86,3.14,7,7,7h6c3.86,0,7-3.14,7-7v-4h2c0.552,0,1-0.448,1-1v-5C45,41.448,44.552,41,44,41z M34.834,31.337
		c1.348-1.348,3.423-1.71,4.634-1.803c-0.09,1.208-0.45,3.276-1.806,4.631c-1.348,1.348-3.424,1.71-4.634,1.803
		C33.119,34.761,33.478,32.693,34.834,31.337z M26.337,34.166c-1.348-1.348-1.71-3.423-1.803-4.634
		c1.208,0.09,3.276,0.45,4.631,1.806c1.348,1.348,1.71,3.424,1.803,4.634C29.761,35.881,27.693,35.521,26.337,34.166z M40,52
		c0,2.757-2.243,5-5,5h-6c-2.757,0-5-2.243-5-5v-4h16V52z M43,46h-2H23h-2v-3h22V46z"/>
</g>
</svg>
  );
}

type PriceIcon = (props: { className?: string }) => React.ReactNode;

const dtfPrices: {
  icon: typeof sizeMic;
  title: string;
  hint?: string;
  price: string;
  quote?: boolean;
}[] = [
  {
    icon: sizeMic,
    title: "Mic — până în 12 cm",
    hint: "10 × 10 cm — ideal pentru un logo pe piept",
    price: "10 lei",
  },
  {
    icon: sizeMediu,
    title: "Mediu — 13–29 cm",
    price: "15–20 lei",
  },
  {
    icon: sizeNormal,
    title: "Standard — 30–40 cm",
    hint: "30 × 40 cm — ideal pentru un print mare pe față sau pe spate",
    price: "25 lei",
  },
  {
    icon: sizeOver,
    title: "Peste 40 cm",
    price: "Cere ofertă",
    quote: true,
  },
];

const supplyPrices: {
  icon: PriceIcon;
  name: string;
  price: string;
  quote?: boolean;
}[] = [
  { icon: ShirtIcon, name: "Tricou", price: "+50 lei/buc." },
  { icon: IconHoodie, name: "Hanorac", price: "+100 lei/buc." },
  { icon: IconCap, name: "Șapcă", price: "+30 lei/buc." },
  { icon: IconPolo, name: "Polo", price: "+60 lei/buc." },
  { icon: IconBag, name: "Tote bag", price: "+30 lei/buc." },
  {
    icon: IconVest,
    name: "Echipamente de lucru",
    price: "Cere ofertă",
    quote: true,
  },
];

const testimonials = [
  {
    quote:
      "PRNT ne-a ajutat să găsim exact ce aveam nevoie pentru echipa noastră. Calitate, comunicare excelentă și livrare la timp!",
    name: "Andrei M.",
    role: "Manager, firmă IT",
  },
  {
    quote:
      "Am comandat tricouri pentru un eveniment și au ieșit impecabil. Vom colabora cu ei și pe viitor.",
    name: "Ioana T.",
    role: "Organizator evenimente",
  },
  {
    quote:
      "Profesionalism și seriozitate. Ne-au oferit cele mai bune soluții pentru proiectul nostru.",
    name: "Maria G.",
    role: "Coordonator proiect, instituție publică",
  },
];
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative bg-cream">
        <div
          aria-hidden="true"
          className="folk-side absolute inset-y-0 left-0 w-20 md:w-32 xl:w-64"
          style={
            { "--folk-img": `url(${separatorPRNT.src})` } as React.CSSProperties
          }
        >
          <div className="folk-side-col -ml-12 pl-16 md:-ml-14 md:pl-0 xl:ml-0" />
          <div className="folk-side-col folk-side-col-offset hidden xl:block xl:-ml-32" />
          <div className="folk-side-col hidden 2xl:block xl:-ml-32" />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-8 py-14 md:grid-cols-2 md:px-16 md:py-20">
          <div>
          <Image className="w-56 md:w-82" src={imgLogo} width={2486} height={1177} alt="Logo"/>
            <h1 className="mt-8 font-display text-4xl font-extrabold leading-[1.1] md:text-5xl">
              Materiale textile
              <br />
              personalizate
              <br />
              <span className="text-primary">pentru orice nevoie.</span>
            </h1>
            <p className="mt-5 max-w-sm text-muted-foreground">
              Pentru persoane fizice, companii și instituții publice.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Hai să discutăm proiectul tău
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <Image
            src={hero}
            alt="Tricouri personalizate împăturite alături de etichetă și mostre de material"
            width={1754}
            height={897}
            priority
            className="w-full rounded-sm object-cover aspect-4/3"
          />
        </div>
      </section>

      <section className="bg-cream/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-3 lg:grid-cols-6">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <b.icon className="mx-auto h-8 w-8 stroke-[1.25] text-primary" />
              <h3 className="mt-4 text-sm font-bold">{b.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div
        aria-hidden="true"
        className="folk-band"
        style={{ backgroundImage: `url(${separatorPRNT.src})` }}
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title">
            Pentru cine imprimăm
            <span aria-hidden="true" className="title-rule" />
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <article
                key={a.title}
                className="overflow-hidden rounded-sm border border-border bg-card"
              >
                <Image
                  src={a.img}
                  alt={a.title}
                  width={800}
                  height={600}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <a.icon className="h-6 w-6 stroke-[1.25] text-primary" />
                    <h3 className="text-lg font-bold">{a.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title">
            Ce produse putem furniza
            <span aria-hidden="true" className="title-rule" />
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {products.map((p) => (
              <figure
                key={p.name}
                className="overflow-hidden rounded-sm border border-border bg-card"
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="bg-sand h-full px-2 py-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.1em]">
                  {p.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="preturi" className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden bg-cream">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4">
              <article className="flex flex-col px-6 py-8 sm:px-10 md:py-10 rounded-2xl border border-primary/50 bg-background">
                <h2 className="font-display text-lg font-extrabold uppercase tracking-wide text-primary sm:text-xl">
                  Preț imprimare DTF
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-0.5 w-16 bg-primary"
                  />
                </h2>
                <ul className="mt-6 divide-y divide-border">
                  {dtfPrices.map((row) => (
                    <li
                      key={row.title}
                      className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <span
                        aria-hidden
                        className="h-12 w-12 shrink-0 bg-primary [mask-image:var(--dtf-icon)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:var(--dtf-icon)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
                        style={
                          {
                            "--dtf-icon": `url(${typeof row.icon === "string" ? row.icon : row.icon.src})`,
                          } as React.CSSProperties
                        }
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold">{row.title}</p>
                        {row.hint ? (
                          <p className="mt-0.5 text-xs text-primary">{row.hint}</p>
                        ) : null}
                      </div>
                      {row.quote ? (
                        <a
                          href="#contact"
                          className="shrink-0 text-sm font-bold text-primary hover:underline"
                        >
                          {row.price}
                        </a>
                      ) : (
                        <p className="shrink-0 text-sm font-bold text-primary">
                          {row.price}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="flex items-start gap-2 border-t mt-4 border-dashed border-primary/40 pt-5 text-xs leading-relaxed text-muted-foreground">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Prețul se calculează în funcție de dimensiunea maximă a
                  printului.
                </p>
              </article>

              <div
                aria-hidden="true"
                className="folk-sidee w-10"
                style={
                  { "--folk-img": `url(${separatorPRNT.src})` } as React.CSSProperties
                }
              >
                <div className="folk-side-col -mx-7" />
              </div>

              <article className="flex flex-col px-6 py-8 sm:px-10 md:py-10 rounded-2xl border border-primary/50 bg-background">
                <h2 className="font-display text-lg font-extrabold uppercase tracking-wide text-primary sm:text-xl">
                  Nu ai produsul? Ne ocupăm noi.
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-0.5 w-16 bg-primary"
                  />
                </h2>
                <p className="mt-3 text-md">
                  Îți putem furniza și produsul pe care îl personalizăm.
                </p>
                <ul className="mt-6 space-y-3.5">
                  {supplyPrices.map((row) => (
                    <li key={row.name} className="flex items-center gap-3">
                      <row.icon className="h-8 w-8 shrink-0 stroke-[1.35] text-primary" />
                      <span className="text-md font-medium">{row.name}</span>
                      <span
                        aria-hidden="true"
                        className="min-w-4 flex-1 border-b border-dotted border-primary/40"
                      />
                      {row.quote ? (
                        <a
                          href="#contact"
                          className="shrink-0 text-sm font-bold text-primary hover:underline"
                        >
                          {row.price}
                        </a>
                      ) : (
                        <span className="shrink-0 text-sm font-bold text-primary">
                          {row.price}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-3 mt-4 border-t border-dashed border-primary/40 pt-5">
                  <Home className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className=" text-sm leading-relaxed font-bold text-primary">
                    <span className="block">
                      Ai deja produsul?
                    </span>
                    Perfect. Vii cu el de acasă și plătești{" "}
                    <span className="">doar imprimarea</span>
                    .
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="section-title">
            Cum lucrăm
            <span aria-hidden="true" className="title-rule" />
          </h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className="text-center">
                <s.icon className="mx-auto h-8 w-8 stroke-[1.25] text-foreground/70" />
                <p className="mt-4 font-display text-lg font-bold text-primary">
                  {s.n}
                </p>
                <h3 className="mt-1 text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grid items-stretch md:grid-cols-2">
        <div className="flex flex-col justify-center bg-sand items-end px-8 py-14 md:px-16">
          <h2 className="font-display text-2xl font-bold leading-snug md:text-3xl text-end">
            Imprimare DTF
            <br />
            de înaltă calitate
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-accent-foreground/80 text-end">
            Folosim tehnologia DTF pentru imprimeuri rezistente, detaliate și
            durabile, potrivite pentru o gamă largă de materiale textile.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex w-fit items-center rounded-sm bg-primary px-5 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Află mai multe
          </a>
        </div>
        <Image
          src={dtf}
          alt="Imprimantă DTF care imprimă un design colorat pe film transfer"
          width={1000}
          height={700}
          className="h-full min-h-[18rem] w-full object-cover"
        />
      </section>

      <section className="grid items-stretch md:grid-cols-2">
        <Image
          src={fabrics}
          alt="Suluri de material textil natural în nuanțe de crem și bej"
          width={900}
          height={700}
          className="h-full min-h-[18rem] w-full object-cover"
        />
        <div className="flex flex-col justify-center bg-sand px-8 py-14 md:px-16">
          <h2 className="font-display text-2xl font-bold leading-snug md:text-3xl">
            Materialul potrivit
            <br />
            pentru proiectul tău
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Te ajutăm să găsești cea mai bună variantă de material în funcție de
            nevoile, bugetul și scopul proiectului tău.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex w-fit items-center rounded-sm bg-primary px-5 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Vezi opțiunile de materiale
          </a>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title">
            De ce să lucrezi cu noi
            <span aria-hidden="true" className="title-rule" />
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <v.icon className="mx-auto h-9 w-9 stroke-[1.25] text-primary" />
                <h3 className="mt-4 text-sm font-bold">{v.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="folk-band"
        style={{ backgroundImage: `url(${separatorPRNT.src})` }}
      />

      <section className="bg-sand/70 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title">
            Ce spun clienții noștri
            <span aria-hidden="true" className="title-rule" />
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-sm border border-border bg-card p-6"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-xs">
                  <span className="block font-bold">{t.name}</span>
                  <span className="text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cream py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr_0.8fr]">
          <div>
            <h2 className="font-display text-2xl font-bold leading-snug md:text-3xl">
              Hai să discutăm
              <br />
              despre proiectul tău
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Completează formularul și te contactăm în cel mai scurt timp.
            </p>
          </div>

          <ContactForm accessKey={process.env.WEB3FORMS_KEY ?? ""} />

          <Image
            src={contactMockup}
            alt="Sacoșă textilă și tricouri albe pregătite pentru personalizare"
            width={800}
            height={800}
            className="w-full rounded-sm object-cover"
          />
        </div>
      </section>

      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 text-sm sm:grid-cols-2 lg:grid-cols-5">
        <Image className="w-42 -mt-8" src={imgLogo} width={2486} height={1177} alt="Logo"/>
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">
              Contact
            </h3>
            <Link href={"tel:+40774901179"} className="mt-3 text-xs text-muted-foreground">
            +40 774 901 179
              <br />
              contact@prnt.ro
            </Link>
          </div>
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">
              Urmărește-ne
            </h3>
            <div className="mt-3 flex gap-3">
              <Link
                href="https://www.facebook.com/people/PRNTro/61593979378668/"
                aria-label="Facebook"
                className="text-primary transition-opacity hover:opacity-70"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              {/* <a
                href="#contact"
                aria-label="Instagram"
                className="text-primary transition-opacity hover:opacity-70"
              >
                <Instagram className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">
              Legal
            </h3>
            <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
              <li><Link href={"https://www.anpc.ro"}>ANPC</Link></li>
              <li>
                <CookieSettingsLink />
              </li>
              <li>
                <Link href="/confidentialitate" className="hover:text-foreground">
                  Confidențialitate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[0.65rem] text-muted-foreground font-bold uppercase tracking-[0.14em]">
              Website realizat de
              <Link href="https://rivesoft.eu"><Image className="h-8 w-fit" src={imgRiveSoft} width={265} height={88} alt="Rive Soft"/></Link>
            </h3>
          </div>
        </div>
      </footer>
    </main>
  );
}
