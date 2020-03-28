import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import Colors from '../constants/Colors';

export function CommingSoon(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <Path
                d="M18.967 6.92a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h9zm0 2h-9a1 1 0 00-.993.883l-.007.117v9a1 1 0 00.884.993l.116.007h9a1 1 0 00.993-.884l.007-.116v-9a1 1 0 00-.883-.994l-.117-.006zM15.924 4.49l.2 1.428H14.24l-.163-1.168a.933.933 0 00-.946-.803l-.108.009-8.319 1.169a.933.933 0 00-.803.945l.009.109 1.169 8.318a.934.934 0 00.89.803l-.001 1.867a2.8 2.8 0 01-2.738-2.41L2.06 6.44a2.8 2.8 0 012.383-3.163l8.319-1.169a2.8 2.8 0 013.162 2.383zm-2.957 7.429l4 2.494-4 2.506v-5z"
                fill={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                fillRule="evenodd"
            />
        </Svg>
    );
}

export function Downloads(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <Path
                d="M20 20v2H4v-2h16zM13 2v13.084l2.995-2.466 1.323 1.612-4.712 3.626a1 1 0 01-1.215.003l-4.77-3.63 1.275-1.61L11 15.083V2h2z"
                fill={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                fillRule="evenodd"
            />
        </Svg>
    );
}

export function Home(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <Path
                d="M12 2.834l10.88 8.81-1.259 1.555-1.787-1.448-.778 9.415H5l-.817-9.43-1.804 1.463-1.259-1.555L12 2.834zm-.001 2.573l-5.946 4.815.774 8.944h10.338l.742-8.976-5.908-4.783z"
                fill={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                fillRule="evenodd"
            />
        </Svg>
    );
}

export function More(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <Path
                d="M21 17v2H3v-2h18zm0-6v2H3v-2h18zm0-6v2H3V5h18z"
                fill={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                fillRule="evenodd"
            />
        </Svg>
    );
}

export function Search(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <Path
                d="M11.132 2.134a9 9 0 017.034 14.615l3.702 3.703-1.414 1.414-3.703-3.701a9 9 0 11-5.62-16.03zm0 2a7 7 0 100 14 7 7 0 000-14z"
                fill={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                fillRule="evenodd"
            />
        </Svg>
    );
}

export function Share(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M18.29 5.89L4.556 10.6l5.69 3.335 3.337 5.69L18.29 5.89z"
                    stroke="#FFF"
                    strokeWidth={1.5}
                />
                <Path fill="#FFF" d="M17.223 5.897l1.06 1.06-7.745 7.746-1.06-1.06z" />
            </G>
        </Svg>
    );
}

export function Plus(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <Path
                fill="#FFF"
                d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"
                fillRule="evenodd"
            />
        </Svg>
    );
}

export function Bell(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <Path
                d="M12.012 6c-3.496 0-5.33 3.535-5.503 10.604L6.502 17h-1.87C4.649 8.945 6.772 4.633 11 4.065V2h2v2.065c4.23.569 6.36 4.88 6.392 12.935H21v2h-6l-.005.176A3 3 0 019 19.001L3 19v-2h14.504c-.1-7.333-1.931-11-5.492-11zM11 19l.007.117A1 1 0 0013 19L11 19z"
                fill="#FFF"
                fillRule="evenodd"
            />
        </Svg>
    );
}

export function Chevron(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <Path
                d="M10.829 5.981l5.119 5.683a.5.5 0 010 .67l-5.12 5.685a.5.5 0 01-.743-.67l4.516-5.015a.5.5 0 000-.669L10.085 6.65a.5.5 0 01.744-.669z"
                fill="#FFF"
                fillRule="evenodd"
            />
        </Svg>
    );
}