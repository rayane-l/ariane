import { useState, Fragment } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

export default function Accordeon() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <section className="mx-10 lg:mx-20 font-jura mt-20 mb-10 " id="groupes">
            <Fragment>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={customAnimation}>
                    <div className="relative">
                        <strong className="absolute -top-6 left-0 bg-arianBord/90 rounded px-4 py-1.5 text-[15px] font-medium text-white">
                            AXE 1 - GT1
                        </strong>
                        <AccordionHeader className="font-jura text-base font-light text-gray-700" onClick={() => handleOpen(1)}>
                            "Labellisation" de projets en Humanités numériques et charte
                        </AccordionHeader>
                    </div>
                    <AccordionBody className="font-jura text-base font-semibold">
                        Les travaux entrepris dans ce groupe de travail prolongent ceux du groupe de travail EVENT de CAHIER. L'objectif est de penser les moyens d'une labellisation des projets en humanités numériques.
                        <br/>
                        Animation : Stéphanie Dord-Crouslé
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={customAnimation}>
                    <div className="relative mt-7">
                        <strong className="absolute -top-6 left-0 bg-arianBord/90 rounded px-4 py-1.5 text-[15px] font-medium text-white">
                            AXE 1 - GT2
                        </strong>
                        <AccordionHeader className="font-jura text-base font-light text-gray-700" onClick={() => handleOpen(2)}>
                            Acquisition de données et transcription assistée par ordinateur (OCR, HTR)
                        </AccordionHeader>
                    </div>
                    <AccordionBody className="font-jura text-base font-semibold">
                        Les travaux de ce groupe de travail prolongent, en partie, les travaux d’acquisition des textes en formats numériques dynamiques. Ils mettent toutefois l'accent sur les méthodes les plus avancées d’océrisation et d’enrichissement.
                        <br/>
                        Animation : Peter Stokes
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={customAnimation}>
                    <div className="relative mt-7">
                        <strong className="absolute -top-6 left-0 bg-arianBord/90 rounded px-4 py-1.5 text-[15px] font-medium text-white">
                            AXE 1 - GT3
                        </strong>
                        <AccordionHeader className="font-jura text-base font-light text-gray-700" onClick={() => handleOpen(3)}>
                            Éditions numériques de qualité
                        </AccordionHeader>
                    </div>
                    <AccordionBody className="font-jura text-base font-semibold">
                        Les travaux de ce groupe de travail portent principalement sur la qualité de l'édition numérique réalisée par les chercheurs. Sont ici discutés, d'un point de vue à la fois scientifique et technique, les choix d'encodage des textes de façon à partager des modèles communs.
                        <br/>
                        Animation : Anaïs Chambat, Nathalie Rousseau
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 4} icon={<Icon id={4} open={open} />} animate={customAnimation}>
                    <div className="relative mt-7">
                        <strong className="absolute -top-6 left-0 bg-arianBord/70 rounded px-4 py-1.5 text-[15px] font-medium text-white">
                            AXE 2 - GT4
                        </strong>
                        <AccordionHeader className="font-jura text-base font-light text-gray-700" onClick={() => handleOpen(4)}>
                            Analyse automatique des textes
                        </AccordionHeader>
                    </div>
                    <AccordionBody className="font-jura text-base font-semibold">
                        L'objectif de ce groupe de travail est d'expertiser les méthodes de la fouille de données en vue de sélectionner celles qui sont les plus pertinentes pour le développement du traitement automatique des textes.
                        <br/>
                        Animation : Ioana Galleron et Motasem Alrahabi
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 5} icon={<Icon id={5} open={open} />} animate={customAnimation}>
                    <div className="relative mt-7">
                        <strong className="absolute -top-6 left-0 bg-arianBord/70 rounded px-4 py-1.5 text-[15px] font-medium text-white">
                            AXE 2 - GT5
                        </strong>
                        <AccordionHeader className="font-jura text-base font-light text-gray-700" onClick={() => handleOpen(5)}>
                            Métadonnées et modélisation de données
                        </AccordionHeader>
                    </div>
                    <AccordionBody className="font-jura text-base font-semibold">
                        L'objectif de ce groupe de travail est de relever le défi de la création de métadonnées assistée par ordinateur. Ses travaux recoupent ceux du GT4 portant sur le traitement automatique des textes et mettent l'accent sur les métadonnées en tant que condensés d'informations importantes sur les données. Il vise à développer des travaux sur l'intelligence des métadonnées.
                        Une partie des travaux de ce groupe sont également réalisés en collaboration avec Masa+, notamment ceux qui concernent le web sémantique.
                        <br/>
                        Animation : Fatiha Idmhand et Sabine Loudcher
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 6} icon={<Icon id={6} open={open} />} animate={customAnimation}>
                    <div className="relative mt-7">
                        <strong className="absolute -top-6 left-0 bg-arianBord/70 rounded px-4 py-1.5 text-[15px] font-medium text-white">
                            AXE 2 - GT6
                        </strong>
                        <AccordionHeader className="font-jura text-base font-light text-gray-700" onClick={() => handleOpen(6)}>
                            "Open French Corpus - Thésaurus" (groupes de travail partagé avec CORLI)
                        </AccordionHeader>
                    </div>
                    <AccordionBody className="font-jura text-base font-semibold">
                        Ce groupe de travail est un groupe inter-consortium. Avec le consortium CORLI, son objectif est de créer un portail commun exposant les ressources textuelles des deux consortiums.
                        <br/>
                        Animation : Alexey Lavrentev
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 7} icon={<Icon id={7} open={open} />} animate={customAnimation}>
                    <div className="relative mt-7">
                        <strong className="absolute -top-6 left-0 bg-arianBord/50 rounded px-4 py-1.5 text-[15px] font-medium text-white">
                            AXE 3
                        </strong>
                        <AccordionHeader className="font-jura text-base font-light text-gray-700" onClick={() => handleOpen(7)}>
                            Séminaires et questions transversales
                        </AccordionHeader>
                    </div>
                    <AccordionBody className="font-jura text-base font-semibold">
                        L'axe 3 vise à étudier de façon transversale les questions éthiques et juridiques qui traversent le champ des humanités numériques.
                        <br/>
                        Animation : Anne-Emmanuelle Kahn
                    </AccordionBody>
                </Accordion>
            </Fragment>

        </section>
    );
}
