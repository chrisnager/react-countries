/** @jsx React.DOM */

var countries = [
    {
        code: "af",
        name: "Afghanistan"
    },
    {
        code: "al",
        name: "Albania"
    },
    {
        code: "dz",
        name: "Algeria"
    },
    {
        code: "ad",
        name: "Andorra"
    },
    {
        code: "ao",
        name: "Angola"
    },
    {
        code: "ag",
        name: "Antigua and Barbuda"
    },
    {
        code: "ar",
        name: "Argentina"
    },
    {
        code: "am",
        name: "Armenia"
    },
    {
        code: "au",
        name: "Australia"
    },
    {
        code: "at",
        name: "Austria"
    },
    {
        code: "az",
        name: "Azerbaijan"
    },
    {
        code: "bs",
        name: "Bahamas"
    },
    {
        code: "bh",
        name: "Bahrain"
    },
    {
        code: "bd",
        name: "Bangladesh"
    },
    {
        code: "bb",
        name: "Barbados"
    },
    {
        code: "by",
        name: "Belarus"
    },
    {
        code: "be",
        name: "Belgium"
    },
    {
        code: "bz",
        name: "Belize"
    },
    {
        code: "bj",
        name: "Benin"
    },
    {
        code: "bt",
        name: "Bhutan"
    },
    {
        code: "bo",
        name: "Bolivia"
    },
    {
        code: "ba",
        name: "Bosnia and Herzegovina"
    },
    {
        code: "bw",
        name: "Botswana"
    },
    {
        code: "br",
        name: "Brazil"
    },
    {
        code: "bn",
        name: "Brunei"
    },
    {
        code: "bg",
        name: "Bulgaria"
    },
    {
        code: "bf",
        name: "Burkina Faso"
    },
    {
        code: "bi",
        name: "Burundi"
    },
    {
        code: "kh",
        name: "Cambodia"
    },
    {
        code: "cm",
        name: "Cameroon"
    },
    {
        code: "ca",
        name: "Canada"
    },
    {
        code: "cv",
        name: "Cape Verde"
    },
    {
        code: "cf",
        name: "Central African Republic"
    },
    {
        code: "td",
        name: "Chad"
    },
    {
        code: "cl",
        name: "Chile"
    },
    {
        code: "co",
        name: "Colombia"
    },
    {
        code: "km",
        name: "Comoros"
    },
    {
        code: "ck",
        name: "Cook Islands"
    },
    {
        code: "cr",
        name: "Costa Rica"
    },
    {
        code: "ci",
        name: "Cote d'Ivoire"
    },
    {
        code: "hr",
        name: "Croatia"
    },
    {
        code: "cu",
        name: "Cuba"
    },
    {
        code: "cy",
        name: "Cyprus"
    },
    {
        code: "cz",
        name: "Czech Republic"
    },
    {
        code: "cd",
        name: "Democratic Republic of the Congo"
    },
    {
        code: "dk",
        name: "Denmark"
    },
    {
        code: "dj",
        name: "Djibouti"
    },
    {
        code: "dm",
        name: "Dominica"
    },
    {
        code: "do",
        name: "Dominican Republic"
    },
    {
        code: "tl",
        name: "East Timor"
    },
    {
        code: "ec",
        name: "Ecuador"
    },
    {
        code: "eg",
        name: "Egypt"
    },
    {
        code: "sv",
        name: "El Salvador"
    },
    {
        code: "gq",
        name: "Equatorial Guinea"
    },
    {
        code: "er",
        name: "Eritrea"
    },
    {
        code: "ee",
        name: "Estonia"
    },
    {
        code: "et",
        name: "Ethiopia"
    },
    {
        code: "fj",
        name: "Fiji"
    },
    {
        code: "fi",
        name: "Finland"
    },
    {
        code: "fr",
        name: "France"
    },
    {
        code: "ga",
        name: "Gabon"
    },
    {
        code: "gm",
        name: "Gambia"
    },
    {
        code: "ge",
        name: "Georgia"
    },
    {
        code: "de",
        name: "Germany"
    },
    {
        code: "gh",
        name: "Ghana"
    },
    {
        code: "gr",
        name: "Greece"
    },
    {
        code: "gd",
        name: "Grenada"
    },
    {
        code: "gt",
        name: "Guatemala"
    },
    {
        code: "gn",
        name: "Guinea"
    },
    {
        code: "gw",
        name: "Guinea-Bissau"
    },
    {
        code: "gy",
        name: "Guyana"
    },
    {
        code: "ht",
        name: "Haiti"
    },
    {
        code: "hn",
        name: "Honduras"
    },
    {
        code: "hu",
        name: "Hungary"
    },
    {
        code: "is",
        name: "Iceland"
    },
    {
        code: "in",
        name: "India"
    },
    {
        code: "id",
        name: "Indonesia"
    },
    {
        code: "ir",
        name: "Iran"
    },
    {
        code: "iq",
        name: "Iraq"
    },
    {
        code: "ie",
        name: "Ireland"
    },
    {
        code: "il",
        name: "Israel"
    },
    {
        code: "it",
        name: "Italy"
    },
    {
        code: "jm",
        name: "Jamaica"
    },
    {
        code: "jp",
        name: "Japan"
    },
    {
        code: "jo",
        name: "Jordan"
    },
    {
        code: "kz",
        name: "Kazakhstan"
    },
    {
        code: "ke",
        name: "Kenya"
    },
    {
        code: "ki",
        name: "Kiribati"
    },
    {
        code: "ks",
        name: "Kosovo"
    },
    {
        code: "kw",
        name: "Kuwait"
    },
    {
        code: "kg",
        name: "Kyrgyzstan"
    },
    {
        code: "la",
        name: "Laos"
    },
    {
        code: "lv",
        name: "Latvia"
    },
    {
        code: "lb",
        name: "Lebanon"
    },
    {
        code: "ls",
        name: "Lesotho"
    },
    {
        code: "lr",
        name: "Liberia"
    },
    {
        code: "ly",
        name: "Libya"
    },
    {
        code: "li",
        name: "Liechtenstein"
    },
    {
        code: "lt",
        name: "Lithuania"
    },
    {
        code: "lu",
        name: "Luxembourg"
    },
    {
        code: "mk",
        name: "Macedonia"
    },
    {
        code: "mg",
        name: "Madagascar"
    },
    {
        code: "mw",
        name: "Malawi"
    },
    {
        code: "my",
        name: "Malaysia"
    },
    {
        code: "mv",
        name: "Maldives"
    },
    {
        code: "ml",
        name: "Mali"
    },
    {
        code: "mt",
        name: "Malta"
    },
    {
        code: "mh",
        name: "Marshall Islands"
    },
    {
        code: "mr",
        name: "Mauritania"
    },
    {
        code: "mu",
        name: "Mauritius"
    },
    {
        code: "mx",
        name: "Mexico"
    },
    {
        code: "fm",
        name: "Micronesia"
    },
    {
        code: "md",
        name: "Moldova"
    },
    {
        code: "mc",
        name: "Monaco"
    },
    {
        code: "mn",
        name: "Mongolia"
    },
    {
        code: "me",
        name: "Montenegro"
    },
    {
        code: "ma",
        name: "Morocco"
    },
    {
        code: "mz",
        name: "Mozambique"
    },
    {
        code: "mm",
        name: "Myanmar"
    },
    {
        code: "na",
        name: "Namibia"
    },
    {
        code: "nr",
        name: "Nauru"
    },
    {
        code: "np",
        name: "Nepal"
    },
    {
        code: "nl",
        name: "Netherlands"
    },
    {
        code: "nz",
        name: "New Zealand"
    },
    {
        code: "ni",
        name: "Nicaragua"
    },
    {
        code: "ne",
        name: "Niger"
    },
    {
        code: "ng",
        name: "Nigeria"
    },
    {
        code: "nu",
        name: "Niue"
    },
    {
        code: "kp",
        name: "North Korea"
    },
    {
        code: "no",
        name: "Norway"
    },
    {
        code: "om",
        name: "Oman"
    },
    {
        code: "pk",
        name: "Pakistan"
    },
    {
        code: "pw",
        name: "Palau"
    },
    {
        code: "pa",
        name: "Panama"
    },
    {
        code: "pg",
        name: "Papua New Guinea"
    },
    {
        code: "py",
        name: "Paraguay"
    },
    {
        code: "cn",
        name: "People's Republic of China"
    },
    {
        code: "pe",
        name: "Peru"
    },
    {
        code: "ph",
        name: "Philippines"
    },
    {
        code: "pl",
        name: "Poland"
    },
    {
        code: "pt",
        name: "Portugal"
    },
    {
        code: "qa",
        name: "Qatar"
    },
    {
        code: "tw",
        name: "Republic of China"
    },
    {
        code: "cg",
        name: "Republic of the Congo"
    },
    {
        code: "ro",
        name: "Romania"
    },
    {
        code: "ru",
        name: "Russia"
    },
    {
        code: "rw",
        name: "Rwanda"
    },
    {
        code: "kn",
        name: "Saint Kitts and Nevis"
    },
    {
        code: "lc",
        name: "Saint Lucia"
    },
    {
        code: "vc",
        name: "Saint Vincent and the Grenadines"
    },
    {
        code: "ws",
        name: "Samoa"
    },
    {
        code: "sm",
        name: "San Marino"
    },
    {
        code: "st",
        name: "Sao Tome and Principe"
    },
    {
        code: "sa",
        name: "Saudi Arabia"
    },
    {
        code: "sn",
        name: "Senegal"
    },
    {
        code: "rs",
        name: "Serbia"
    },
    {
        code: "sc",
        name: "Seychelles"
    },
    {
        code: "sl",
        name: "Sierra Leone"
    },
    {
        code: "sg",
        name: "Singapore"
    },
    {
        code: "sk",
        name: "Slovakia"
    },
    {
        code: "si",
        name: "Slovenia"
    },
    {
        code: "sb",
        name: "Solomon Islands"
    },
    {
        code: "so",
        name: "Somalia"
    },
    {
        code: "za",
        name: "South Africa"
    },
    {
        code: "kr",
        name: "South Korea"
    },
    {
        code: "ss",
        name: "South Sudan"
    },
    {
        code: "es",
        name: "Spain"
    },
    {
        code: "lk",
        name: "Sri Lanka"
    },
    {
        code: "sd",
        name: "Sudan"
    },
    {
        code: "sr",
        name: "Suriname"
    },
    {
        code: "sz",
        name: "Swaziland"
    },
    {
        code: "se",
        name: "Sweden"
    },
    {
        code: "ch",
        name: "Switzerland"
    },
    {
        code: "sy",
        name: "Syria"
    },
    {
        code: "tj",
        name: "Tajikistan"
    },
    {
        code: "tz",
        name: "Tanzania"
    },
    {
        code: "th",
        name: "Thailand"
    },
    {
        code: "tg",
        name: "Togo"
    },
    {
        code: "to",
        name: "Tonga"
    },
    {
        code: "tt",
        name: "Trinidad and Tobago"
    },
    {
        code: "tn",
        name: "Tunisia"
    },
    {
        code: "tr",
        name: "Turkey"
    },
    {
        code: "tm",
        name: "Turkmenistan"
    },
    {
        code: "tv",
        name: "Tuvalu"
    },
    {
        code: "ug",
        name: "Uganda"
    },
    {
        code: "ua",
        name: "Ukraine"
    },
    {
        code: "ae",
        name: "United Arab Emirates"
    },
    {
        code: "gb",
        name: "United Kingdom"
    },
    {
        code: "us",
        name: "United States"
    },
    {
        code: "uy",
        name: "Uruguay"
    },
    {
        code: "uz",
        name: "Uzbekistan"
    },
    {
        code: "vu",
        name: "Vanuatu"
    },
    {
        code: "va",
        name: "Vatican City"
    },
    {
        code: "ve",
        name: "Venezuela"
    },
    {
        code: "vn",
        name: "Vietnam"
    },
    {
        code: "eh",
        name: "Western Sahara"
    },
    {
        code: "ye",
        name: "Yemen"
    },
    {
        code: "zm",
        name: "Zambia"
    },
    {
        code: "zw",
        name: "Zimbabwe"
    }
];

function Country(props, children) {
    return <li>
        <img src={'//flags.fmcdn.net/data/flags/mini/' + props.code + '.png'} alt={props.name} /> <b>{props.name}</b>
    </li>;
};

var Countries = React.createClass({
    getInitialState: function() {
        return {page: 0}
    },

    prevPage: function() {
        if (this.state.page > 0) {
            this.setState({
                page: this.state.page - 1
            });
        }
    },

    nextPage: function() {
        if (this.state.page < ~~(this.props.data.length / 10)) {
            this.setState({
                page: this.state.page + 1
            });
        }
    },

    render: function() {
        var prev = this.prevPage,
            next = this.nextPage,
            country = this.props.data.slice(this.state.page * 10, this.state.page * 10 + 10);

        return(            
            <ul>
                <li>
                    <button onClick={prev}>{this.state.page === 0 ? 'Beginning of list' : 'Previous page (' + this.state.page + ')'}</button>
                    <button onClick={next}>{this.state.page === ~~(this.props.data.length / 10) ? 'End of list' : 'Next page  (' + (this.state.page + 2) + ')'}</button>
                </li>
                {country.map(function(country) {
                    return <Country code={country.code} name={country.name} />;
                })}
            </ul>
        )
    }
});

React.renderComponent(
    <Countries data={countries} />,
    document.getElementsByTagName('main')[0]
);
