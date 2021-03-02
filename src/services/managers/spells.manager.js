import { difference } from 'lodash';

class SpellsManager {
  spells = new Map([
    ['Wind Strike', {
      name: 'Wind Strike',
      baseMaxHit: 2,
      attributes: ['elemental', 'wind', 'strike', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAQAAADvEAYoAAAAAXNSR0IArs4c6QAAAFdJREFUeNqtk8sNACAIQx3d0disnlSCYE1je/WlyKe1SgimQmEOdOc7lgABzJH9zJxzLGTY4YXl/7DCPotkAIgYK2rqAySVJzZCbLk8XHmNxIUVT+PhCAdxJdA25dfvagAAAABJRU5ErkJggg==',
    }],
    ['Water Strike', {
      name: 'Water Strike',
      baseMaxHit: 4,
      attributes: ['elemental', 'water', 'strike', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAABoAAAASBAMAAAC3N9OQAAAAAXNSR0IArs4c6QAAABJQTFRFAAAAqqz8enr5MTHuJArHAAAAhaxbWQAAAAF0Uk5TAEDm2GYAAABjSURBVHjaZY/BDYAwDAP7YQDYALNB0w2a/vuo918FJRWIBv9OiWMnJRdJpkfkB8mh2tgdNgPDORqqIqI+JFUlA6X1aTLA1eimmoHzQKGZqgDY9z+tm+uVkBDSQ7O1dfjo/fYG6OoqteUkDS4AAAAASUVORK5CYII=',
    }],
    ['Earth Strike', {
      name: 'Earth Strike',
      baseMaxHit: 6,
      attributes: ['elemental', 'earth', 'strike', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAABoAAAASBAMAAAC3N9OQAAAAAXNSR0IArs4c6QAAABJQTFRFAAAAKtUqBK8EBG8EBTUFAAAAYMl5HwAAAAF0Uk5TAEDm2GYAAABjSURBVHjaZY/BDYAwDAP7YQDYALNB0w2a/vuo918FJRWIBv9OiWMnJRdJpkfkB8mh2tgdNgPDORqqIqI+JFUlA6X1aTLA1eimmoHzQKGZqgDY9z+tm+uVkBDSQ7O1dfjo/fYG6OoqteUkDS4AAAAASUVORK5CYII=',
    }],
    ['Fire Strike', {
      name: 'Fire Strike',
      baseMaxHit: 8,
      attributes: ['elemental', 'fire', 'strike', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAABoAAAASBAMAAAC3N9OQAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA/K8D+JEC7XEDzgMAAAAA4IhbKwAAAAF0Uk5TAEDm2GYAAABjSURBVHjaZY/BDYAwDAP7YQDYALNB0w2a/vuo918FJRWIBv9OiWMnJRdJpkfkB8mh2tgdNgPDORqqIqI+JFUlA6X1aTLA1eimmoHzQKGZqgDY9z+tm+uVkBDSQ7O1dfjo/fYG6OoqteUkDS4AAAAASUVORK5CYII=',
    }],
    ['Wind Bolt', {
      name: 'Wind Bolt',
      baseMaxHit: 9,
      attributes: ['elemental', 'wind', 'bolt', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAoBAMAAAAbPVchAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA7Pb+wMDAgICAVFRUAAAA8uhplQAAAAF0Uk5TAEDm2GYAAACbSURBVHjafdK7FcMwDENRNBpA2kD0BuII1gB28fZfJYX1dU7C7h50ABWAS/MAWF1rfdl3n7/NJaoPA6vZDcTFQLRpINr0w+HG7s7ph8ONzX6Ymbl3l2JWHEZux+FMl1Kc4dP9cEDTDqi7Ng7X1jCWEIMiZ8SgSAktcxAzWtYhJhRm+cS8LiFi/O97d3ib3fryvTu8zW5tnyYp6ANuplNW1bWMswAAAABJRU5ErkJggg==',
    }],
    ['Water Bolt', {
      name: 'Water Bolt',
      baseMaxHit: 10,
      attributes: ['elemental', 'water', 'bolt', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAoBAMAAAAbPVchAAAAAXNSR0IArs4c6QAAABJQTFRFAAAAo6X7enr5S0v7MTHuAAAAFdA4XwAAAAF0Uk5TAEDm2GYAAACbSURBVHjafdK7FcMwDENRNBpA2kD0BuII1gB28fZfJYX1dU7C7h50ABWAS/MAWF1rfdl3n7/NJaoPA6vZDcTFQLRpINr0w+HG7s7ph8ONzX6Ymbl3l2JWHEZux+FMl1Kc4dP9cEDTDqi7Ng7X1jCWEIMiZ8SgSAktcxAzWtYhJhRm+cS8LiFi/O97d3ib3fryvTu8zW5tnyYp6ANuplNW1bWMswAAAABJRU5ErkJggg==',
    }],
    ['Earth Bolt', {
      name: 'Earth Bolt',
      baseMaxHit: 11,
      attributes: ['elemental', 'earth', 'bolt', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAoBAMAAAAbPVchAAAAAXNSR0IArs4c6QAAABJQTFRFAAAAc/9zBsUGLXAtAosCAAAArRJAwgAAAAF0Uk5TAEDm2GYAAACcSURBVHjafdK7EcMwDINhNBpA2kA8byBPoOMAdvHvv0oK6+lcwu47dAAVgEvzAFhdSnnZd5+/zSWKDwOr2Q3ExUC0aSDa9MPhxu7O6YfDjc1+mJm5d9dqVh1GbsfhTNdaneHT/XBA0w6ouzQOl9YwlhCDImfEoEgJLXMQM1rWISYUZvnEvC4hYvzve3d4m9368r07vM1ubZ8mKegDE4JUfbQAd78AAAAASUVORK5CYII=',
    }],
    ['Fire Bolt', {
      name: 'Fire Bolt',
      baseMaxHit: 12,
      attributes: ['elemental', 'fire', 'bolt', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAoBAMAAAAbPVchAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA+vYM/K8D11QtzgMAAAAAb4w61QAAAAF0Uk5TAEDm2GYAAACbSURBVHjafdK7FcMwDENRNBpA2kD0BuII1gB28fZfJYX1dU7C7h50ABWAS/MAWF1rfdl3n7/NJaoPA6vZDcTFQLRpINr0w+HG7s7ph8ONzX6Ymbl3l2JWHEZux+FMl1Kc4dP9cEDTDqi7Ng7X1jCWEIMiZ8SgSAktcxAzWtYhJhRm+cS8LiFi/O97d3ib3fryvTu8zW5tnyYp6ANuplNW1bWMswAAAABJRU5ErkJggg==',
    }],
    ['Wind Blast', {
      name: 'Wind Blast',
      baseMaxHit: 13,
      attributes: ['elemental', 'wind', 'blast', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAAXNSR0IArs4c6QAAAKNJREFUeNrFlWEOgCAIRj06R+NmNLc0QDATKr8/yOBNCqUUfxHTxiKlB+F9D6e0f0SSJWCyIwRAh4KS9r8PWPJZAJgCwAfwAA8wnKfcIICQkO389CKrrGnVwlPNBlrsg5aGyvL6oB9QI6RkmRfCrm+SrqKtpkFHZnONAJzoG8BGCbGPGP6NCY2U0MrhyxS+zhkPStqT9t+rHBss4dGWMFy3x/sBFDYRCf6baoIAAAAASUVORK5CYII=',
    }],
    ['Water Blast', {
      name: 'Water Blast',
      baseMaxHit: 14,
      attributes: ['elemental', 'water', 'blast', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAAAXNSR0IArs4c6QAAAAxQTFRFAAAAS0v7MTHuAAAAHmdp4QAAAAF0Uk5TAEDm2GYAAACVSURBVHjaZVA9DoJgDH0JB+BInKIOGsMRnJw9hUdwKUOP8JFwFhcmFgYb/J5BpITYoXlJ2/dTAKgmLEXOvWDn1rFFSfYNOaBUqlL3wG0ByS3PIJubpwEFm9elZ4uCz7E+fXnG67nmgMreIjefkI0i9ATXh8hRDa53kcMe/EaxHOdBGBIhGjY2Y5vVvxRrwIgcT1jf8gFEG6KVQoW9vwAAAABJRU5ErkJggg==',
    }],
    ['Earth Blast', {
      name: 'Earth Blast',
      baseMaxHit: 15,
      attributes: ['elemental', 'earth', 'blast', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAAAXNSR0IArs4c6QAAAAxQTFRFAAAABK8EBG8EAAAA4LaCdAAAAAF0Uk5TAEDm2GYAAACVSURBVHjaZVA9DoJgDH0JB+BInKIOGsMRnJw9hUdwKUOP8JFwFhcmFgYb/J5BpITYoXlJ2/dTAKgmLEXOvWDn1rFFSfYNOaBUqlL3wG0ByS3PIJubpwEFm9elZ4uCz7E+fXnG67nmgMreIjefkI0i9ATXh8hRDa53kcMe/EaxHOdBGBIhGjY2Y5vVvxRrwIgcT1jf8gFEG6KVQoW9vwAAAABJRU5ErkJggg==',
    }],
    ['Fire Blast', {
      name: 'Fire Blast',
      baseMaxHit: 16,
      attributes: ['elemental', 'fire', 'blast', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAAAXNSR0IArs4c6QAAAAxQTFRFAAAA7XEDzgMAAAAAw8DfrQAAAAF0Uk5TAEDm2GYAAACVSURBVHjaZVA9DoJgDH0JB+BInKIOGsMRnJw9hUdwKUOP8JFwFhcmFgYb/J5BpITYoXlJ2/dTAKgmLEXOvWDn1rFFSfYNOaBUqlL3wG0ByS3PIJubpwEFm9elZ4uCz7E+fXnG67nmgMreIjefkI0i9ATXh8hRDa53kcMe/EaxHOdBGBIhGjY2Y5vVvxRrwIgcT1jf8gFEG6KVQoW9vwAAAABJRU5ErkJggg==',
    }],
    ['Wind Wave', {
      name: 'Wind Wave',
      baseMaxHit: 17,
      attributes: ['elemental', 'wind', 'wave', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAAXNSR0IArs4c6QAAAA9QTFRFAAAA////wMDAgICAFRIvB9A3wgAAAAF0Uk5TAEDm2GYAAACsSURBVHjahZHJDcUwCEQ50ABSKrDSASmAxNN/TV9gvF4+ki35aRgWE3nAg5YADgRAVXUibkAf2JCoJuqSmkRxSCapzRY1szjreNgkUQZr0qjbybNPkBIeY6BV5emMlgSUUjCIETu4N/K5xBaCr5SlHycO7CQ29uW10G1zriC2Nu2kzRrusRfcS9/sN4fkFblCFJcfEZF9DSLn18qFbXcE2d9B6C95T8I4CYXxDwUCQCEhBqkDAAAAAElFTkSuQmCC',
    }],
    ['Water Wave', {
      name: 'Water Wave',
      baseMaxHit: 18,
      attributes: ['elemental', 'water', 'wave', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAAXNSR0IArs4c6QAAAA9QTFRFAAAAqqz8enr5MTHuFRIvKSwbUQAAAAF0Uk5TAEDm2GYAAACsSURBVHjahZHJDcUwCEQ50ABSKrDSASmAxNN/TV9gvF4+ki35aRgWE3nAg5YADgRAVXUibkAf2JCoJuqSmkRxSCapzRY1szjreNgkUQZr0qjbybNPkBIeY6BV5emMlgSUUjCIETu4N/K5xBaCr5SlHycO7CQ29uW10G1zriC2Nu2kzRrusRfcS9/sN4fkFblCFJcfEZF9DSLn18qFbXcE2d9B6C95T8I4CYXxDwUCQCEhBqkDAAAAAElFTkSuQmCC',
    }],
    ['Earth Wave', {
      name: 'Earth Wave',
      baseMaxHit: 19,
      attributes: ['elemental', 'earth', 'wave', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAAXNSR0IArs4c6QAAAA9QTFRFAAAAXvxOBK8EBG8EFRIvhXk11AAAAAF0Uk5TAEDm2GYAAACsSURBVHjahZHJDcUwCEQ50ABSKrDSASmAxNN/TV9gvF4+ki35aRgWE3nAg5YADgRAVXUibkAf2JCoJuqSmkRxSCapzRY1szjreNgkUQZr0qjbybNPkBIeY6BV5emMlgSUUjCIETu4N/K5xBaCr5SlHycO7CQ29uW10G1zriC2Nu2kzRrusRfcS9/sN4fkFblCFJcfEZF9DSLn18qFbXcE2d9B6C95T8I4CYXxDwUCQCEhBqkDAAAAAElFTkSuQmCC',
    }],
    ['Fire Wave', {
      name: 'Fire Wave',
      baseMaxHit: 20,
      attributes: ['elemental', 'fire', 'wave', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAAXNSR0IArs4c6QAAAA9QTFRFAAAA+vhg/18ZzgMAFRIvkdZ+mAAAAAF0Uk5TAEDm2GYAAACsSURBVHjahZHJDcUwCEQ50ABSKrDSASmAxNN/TV9gvF4+ki35aRgWE3nAg5YADgRAVXUibkAf2JCoJuqSmkRxSCapzRY1szjreNgkUQZr0qjbybNPkBIeY6BV5emMlgSUUjCIETu4N/K5xBaCr5SlHycO7CQ29uW10G1zriC2Nu2kzRrusRfcS9/sN4fkFblCFJcfEZF9DSLn18qFbXcE2d9B6C95T8I4CYXxDwUCQCEhBqkDAAAAAElFTkSuQmCC',
    }],
    ['Wind Surge', {
      name: 'Wind Surge',
      baseMaxHit: 21,
      attributes: ['elemental', 'wind', 'surge', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAAXNSR0IArs4c6QAAAA9QTFRFAAAA////wMDAgICAFRIvB9A3wgAAAAF0Uk5TAEDm2GYAAADLSURBVHjaXZLRDcQgDEP5YAFug3OZAHcAJLz/TKcYrrS1RKW8BicEUgplpbekd5DvSOrXd5EzAp07SUPqWdz7HGjw3EikRN6QBkjihvIASBj1ZdQAtolSSlG5AQcRyI2ENWYSnOReEBEiUz7R8P/DSepBonagWGd3g9PEstHg3GFNIzbbohTgkE/RnFRKIM9vEGj4BvlMEv0cd5LkUsVaZLyJjZ5Em1Sly2g6177myj+5psh/h3v40wlV150Zoe67lnuqz/dgPV/QAj9cIkSTOKBy1wAAAABJRU5ErkJggg==',
    }],
    ['Water Surge', {
      name: 'Water Surge',
      baseMaxHit: 22,
      attributes: ['elemental', 'water', 'surge', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAAXNSR0IArs4c6QAAAA9QTFRFAAAAqqz8enr5MTHuFRIvKSwbUQAAAAF0Uk5TAEDm2GYAAADLSURBVHjaXZLRDcQgDEP5YAFug3OZAHcAJLz/TKcYrrS1RKW8BicEUgplpbekd5DvSOrXd5EzAp07SUPqWdz7HGjw3EikRN6QBkjihvIASBj1ZdQAtolSSlG5AQcRyI2ENWYSnOReEBEiUz7R8P/DSepBonagWGd3g9PEstHg3GFNIzbbohTgkE/RnFRKIM9vEGj4BvlMEv0cd5LkUsVaZLyJjZ5Em1Sly2g6177myj+5psh/h3v40wlV150Zoe67lnuqz/dgPV/QAj9cIkSTOKBy1wAAAABJRU5ErkJggg==',
    }],
    ['Earth Surge', {
      name: 'Earth Surge',
      baseMaxHit: 23,
      attributes: ['elemental', 'earth', 'surge', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAAXNSR0IArs4c6QAAAA9QTFRFAAAAXvxOBK8EBG8EFRIvhXk11AAAAAF0Uk5TAEDm2GYAAADLSURBVHjaXZLRDcQgDEP5YAFug3OZAHcAJLz/TKcYrrS1RKW8BicEUgplpbekd5DvSOrXd5EzAp07SUPqWdz7HGjw3EikRN6QBkjihvIASBj1ZdQAtolSSlG5AQcRyI2ENWYSnOReEBEiUz7R8P/DSepBonagWGd3g9PEstHg3GFNIzbbohTgkE/RnFRKIM9vEGj4BvlMEv0cd5LkUsVaZLyJjZ5Em1Sly2g6177myj+5psh/h3v40wlV150Zoe67lnuqz/dgPV/QAj9cIkSTOKBy1wAAAABJRU5ErkJggg==',
    }],
    ['Fire Surge', {
      name: 'Fire Surge',
      baseMaxHit: 24,
      attributes: ['elemental', 'fire', 'surge', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAAXNSR0IArs4c6QAAAA9QTFRFAAAA+vhg/18ZzgMAFRIvkdZ+mAAAAAF0Uk5TAEDm2GYAAADLSURBVHjaXZLRDcQgDEP5YAFug3OZAHcAJLz/TKcYrrS1RKW8BicEUgplpbekd5DvSOrXd5EzAp07SUPqWdz7HGjw3EikRN6QBkjihvIASBj1ZdQAtolSSlG5AQcRyI2ENWYSnOReEBEiUz7R8P/DSepBonagWGd3g9PEstHg3GFNIzbbohTgkE/RnFRKIM9vEGj4BvlMEv0cd5LkUsVaZLyJjZ5Em1Sly2g6177myj+5psh/h3v40wlV150Zoe67lnuqz/dgPV/QAj9cIkSTOKBy1wAAAABJRU5ErkJggg==',
    }],
    ['Crumble Undead', {
      name: 'Crumble Undead',
      baseMaxHit: 15,
      attributes: ['undead', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAABoAAAAoBAMAAAAS1vdbAAAAAXNSR0IArs4c6QAAABVQTFRFAAAA5ub2uMbLiIV2qQbtFRcJAAAA7eNTiwAAAAF0Uk5TAEDm2GYAAAC7SURBVHjanZA9CsMwDIU9edeQ7NERKtITiOwNaA+1efc/QpF/ag8thWow+XiRnp5C8Iq4wigAM+kfFAEo0MaiEdpvCvWnUtZDsx5oferV10FW7VITx6bIQ6qO16cMLmCYY8KIJzMTUcEIrkQ+qUi8VZxpRYCIGTMtRuS0m51MZo9CZmZO9pNK37a0PhGp/u6QKm7F3SMkEWNaPaNvL7ud3DOWufw+mtOtxy9z5RsluWMQZNxwulk/on+8AJMfX/G6eVT6AAAAAElFTkSuQmCC',
    }],
    ['Saradomin Strike', {
      name: 'Saradomin Strike',
      baseMaxHit: 20,
      attributes: ['god', 'saradomin', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoAgMAAADxkFD+AAAACVBMVEUAAAAAAAEAlP8D8C42AAAAAXRSTlMAQObYZgAAAMBJREFUeF490LGxxCAMBmEIKIF+fB34ZlgC5S+hH0ogQFU+yeJM9Hlmx/ZPSlzpnMz9Y5GXdbxEv5ymb6A9lIXqPBTVFYGhB1GFYIXmzHcq8HGW5k0Zs8KMvBE9fd1du/eMecW7y9itStdp1PVF2BgXiC5aUHVze2CHZ0AZqgtxZoCPYEzOIu8dVN1enAHBjCwJVmQe+uYIspV9B2VZfJ1BFt8PlSTETOuE+dA6meulHvqXI/jz/2nOjEXn5ps/Xv9C+GIPTZu1uwAAAABJRU5ErkJggg==',
      requirements: {
        equipped: {
          weapon: [2415, 22296],
        },
      },
    }],
    ['Claws of Guthix', {
      name: 'Claws of Guthix',
      baseMaxHit: 20,
      attributes: ['god', 'guthix', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAYAAAA3WXuFAAAAlElEQVR42u3YQQrAIBBDUT1UD9H7H0iXRagyOkncRHDtA+1XWgp01Bab9BGFSGDfAk97Q5OI2oPMYSTMansEqHGhyJkho3YO6hpFAuUOvzAJMdQl0PzLTIIy4YOCEEX+37YDELLI6euEUWQgxkV2kV1kXQDpIOTbOF1kxtv4uMjMtzEA4xK7xC6xQZwSq3/DXBtYTAeJOzAWcpx/bQAAAABJRU5ErkJggg==',
      requirements: {
        equipped: {
          weapon: [2416, 8841, 24144],
        },
      },
    }],
    ['Flames of Zamorak', {
      name: 'Flames of Zamorak',
      baseMaxHit: 20,
      attributes: ['god', 'zamorak', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAmAgMAAADLmjGOAAAACVBMVEUAAAAAAAH1BAICspu2AAAAAXRSTlMAQObYZgAAALhJREFUeF49z7ERxCAMBEA5oAT68Qef4xmfZl4l0A8lKOCqfAHGF20gjXQyk+UNzle/8uiAbabKcpRF9pLuRccXbRPwRUL5sDbjGjjMDWtN1CtKIGFwSDI+6pzUjkoCQSPIDpySzEi69lvyohGippPmYoZgN21jy8LjnPJaLJJxVbKOGwmfoAVnn0bUh2Cz9Rmv6hjMQfN8BpV9lzT6S0C5ee++VmT31cEymYM+JekUbbKT75dpjv4BwZhitOp+jnIAAAAASUVORK5CYII=',
      requirements: {
        equipped: {
          weapon: [2417, 11791, 12904],
        },
      },
    }],
    ['Iban Blast', {
      name: 'Iban Blast',
      baseMaxHit: 25,
      attributes: ['iban blast', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAABoAAAAeAgMAAABPteZLAAAAAXNSR0IArs4c6QAAAAlQTFRFAAAA////FRIvug6vYAAAAAF0Uk5TAEDm2GYAAABqSURBVHjaVY+7DcAgDEQtSkZhn6NggihTsER6GqTYU0YYH1LcPOn8uxMRsS6rkr3OPG3zad5Isw4XFJsFMYgreIfeHIq1mG2idsmmQB1SDACGKP6kzjnunTvn7vnDv/QRvuiTvpmDuTznB6NJMrHxAfIPAAAAAElFTkSuQmCC',
    }],
    ['Smoke Rush', {
      name: 'Smoke Rush',
      baseMaxHit: 13,
      attributes: ['smoke', 'rush', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACMAAAAOBAMAAABXxbiCAAAAAXNSR0IArs4c6QAAABJQTFRFAAAAwMDAgICAVFRUFRIvAAAA0nul9QAAAAF0Uk5TAEDm2GYAAABbSURBVHjabY/BDYAwDAPzyQBmgxoxAeoI/KOC918FAeIRNX5aZ8s2M5fCklyPkiVxUwJdJJlAHw3kC8oVHmYaAH7wg9UAYCG59nPv1xGlNQeL+mJEMbU6NN2+AZhSI4XTIOzuAAAAAElFTkSuQmCC',
    }],
    ['Shadow Rush', {
      name: 'Shadow Rush',
      baseMaxHit: 14,
      attributes: ['shadow', 'rush', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACMAAAAOCAQAAAAP4m06AAAAAXNSR0IArs4c6QAAAFxJREFUeNqtk2EOABAIRh2to3U0N8u0RluZydf7Y8ZLqLUd4iiGpNQkpFRlTrF5l5kk06WFevFKYJv9UrrLwkmD5CRjYZ1nY467dBPhNIiiQFcMe3DQ94M1w3drDt3YROZeK7TlAAAAAElFTkSuQmCC',
    }],
    ['Blood Rush', {
      name: 'Blood Rush',
      baseMaxHit: 15,
      attributes: ['blood', 'rush', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACMAAAAOBAMAAABXxbiCAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA9QQChwEBXQEBNwEBAAAArfdRNAAAAAF0Uk5TAEDm2GYAAABbSURBVHjabY/BDYAwDAPzyQBmgxoxAeoI/KOC918FAeIRNX5aZ8s2M5fCklyPkiVxUwJdJJlAHw3kC8oVHmYaAH7wg9UAYCG59nPv1xGlNQeL+mJEMbU6NN2+AZhSI4XTIOzuAAAAAElFTkSuQmCC',
    }],
    ['Ice Rush', {
      name: 'Ice Rush',
      baseMaxHit: 16,
      attributes: ['ice', 'rush', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACMAAAAOBAMAAABXxbiCAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA////o6X7fH/2S0v7AAAA5mItHAAAAAF0Uk5TAEDm2GYAAABbSURBVHjabY/BDYAwDAPzyQBmgxoxAeoI/KOC918FAeIRNX5aZ8s2M5fCklyPkiVxUwJdJJlAHw3kC8oVHmYaAH7wg9UAYCG59nPv1xGlNQeL+mJEMbU6NN2+AZhSI4XTIOzuAAAAAElFTkSuQmCC',
    }],
    ['Smoke Burst', {
      name: 'Smoke Burst',
      baseMaxHit: 17,
      attributes: ['smoke', 'burst', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACMAAAAeBAMAAABUE7oZAAAAAXNSR0IArs4c6QAAABJQTFRFAAAAwMDAgICAVFRUFRIvAAAA0nul9QAAAAF0Uk5TAEDm2GYAAABtSURBVHjaxZLBCYBADATzSQGxA1euArEE/4c6/bfiQwSj+ZvnMgkDWTNz6JbGAUgRqJFAR5IS6NsYkhqA072bsUXEDV4wY0TEIGla9nk51l5G38XivHMT2avxlP3J6yVRqP7jlZ9WvLYqwKcmJ/XjV+VpU6YgAAAAAElFTkSuQmCC',
    }],
    ['Shadow Burst', {
      name: 'Shadow Burst',
      baseMaxHit: 18,
      attributes: ['shadow', 'burst', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAQAAAAMNG+hAAAAAXNSR0IArs4c6QAAAHhJREFUeNpjYECA/0iQTPAfKyTPEAcwJNcwJCMQkHTDoIZgMw6rR5ENhlsA1Yys1IGwYRguxTAEl2EN/xvA4g1QCGIf+H8AahD1jKGGp6gUxFginLykSJwr/o+mm2GbbsiOcColv9F0M1TTDXm1FVWqO6pVvhQ3BQCVIEyuulmQ9wAAAABJRU5ErkJggg==',
    }],
    ['Blood Burst', {
      name: 'Blood Burst',
      baseMaxHit: 21,
      attributes: ['blood', 'burst', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACMAAAAeBAMAAABUE7oZAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA9QQChwEBXQEBNwEBAAAArfdRNAAAAAF0Uk5TAEDm2GYAAABtSURBVHjaxZLBCYBADATzSQGxA1euArEE/4c6/bfiQwSj+ZvnMgkDWTNz6JbGAUgRqJFAR5IS6NsYkhqA072bsUXEDV4wY0TEIGla9nk51l5G38XivHMT2avxlP3J6yVRqP7jlZ9WvLYqwKcmJ/XjV+VpU6YgAAAAAElFTkSuQmCC',
    }],
    ['Ice Burst', {
      name: 'Ice Burst',
      baseMaxHit: 22,
      attributes: ['ice', 'burst', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACMAAAAeBAMAAABUE7oZAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA////o6X7fH/2S0v7AAAA5mItHAAAAAF0Uk5TAEDm2GYAAABtSURBVHjaxZLBCYBADATzSQGxA1euArEE/4c6/bfiQwSj+ZvnMgkDWTNz6JbGAUgRqJFAR5IS6NsYkhqA072bsUXEDV4wY0TEIGla9nk51l5G38XivHMT2avxlP3J6yVRqP7jlZ9WvLYqwKcmJ/XjV+VpU6YgAAAAAElFTkSuQmCC',
    }],
    ['Smoke Blitz', {
      name: 'Smoke Blitz',
      baseMaxHit: 23,
      attributes: ['smoke', 'blitz', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAAA4AAAAjBAMAAABWVCYKAAAAAXNSR0IArs4c6QAAABJQTFRFAAAAwMDAgICAVFRUFRIvAAAA0nul9QAAAAF0Uk5TAEDm2GYAAABoSURBVHjafc7BDYAwDAPAfDqA2QBLnYAVGABF8v6roLiiwAP6OalxIkdEKPyaDqtdL6//Od/068zpI0eNGB2cJnupZNdTshaaPUrYJGpBVqFcsZRcsbAE8DQBdEVz7r4TEl20SaO4+5+DjSPuh6AkbwAAAABJRU5ErkJggg==',
    }],
    ['Shadow Blitz', {
      name: 'Shadow Blitz',
      baseMaxHit: 24,
      attributes: ['shadow', 'blitz', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAAA4AAAAjCAQAAAAOc/OyAAAAAXNSR0IArs4c6QAAAHBJREFUeNq10tENwCAIRVFGYzRHc7PbHxNBQG2awudJ5KmI2EKQohidU6cXvMXtsaeZjVbP/ANPgWr+FEjRFHHIO9TRKxKQe1TTFkmRJGmC6nAeTInE66+oAdWj/c97lIBi86aBzo8gySWodq/aIg8PfOhE5uHdnyIAAAAASUVORK5CYII=',
    }],
    ['Blood Blitz', {
      name: 'Blood Blitz',
      baseMaxHit: 25,
      attributes: ['blood', 'blitz', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAAA4AAAAjBAMAAABWVCYKAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA9QQChwEBXQEBNwEBAAAArfdRNAAAAAF0Uk5TAEDm2GYAAABoSURBVHjafc7BDYAwDAPAfDqA2QBLnYAVGABF8v6roLiiwAP6OalxIkdEKPyaDqtdL6//Od/068zpI0eNGB2cJnupZNdTshaaPUrYJGpBVqFcsZRcsbAE8DQBdEVz7r4TEl20SaO4+5+DjSPuh6AkbwAAAABJRU5ErkJggg==',
    }],
    ['Ice Blitz', {
      name: 'Ice Blitz',
      baseMaxHit: 26,
      attributes: ['ice', 'blitz', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAAA4AAAAjBAMAAABWVCYKAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA////o6X7fH/2S0v7AAAA5mItHAAAAAF0Uk5TAEDm2GYAAABoSURBVHjafc7BDYAwDAPAfDqA2QBLnYAVGABF8v6roLiiwAP6OalxIkdEKPyaDqtdL6//Od/068zpI0eNGB2cJnupZNdTshaaPUrYJGpBVqFcsZRcsbAE8DQBdEVz7r4TEl20SaO4+5+DjSPuh6AkbwAAAABJRU5ErkJggg==',
    }],
    ['Smoke Barrage', {
      name: 'Smoke Barrage',
      baseMaxHit: 27,
      attributes: ['smoke', 'barrage', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACYAAAAoBAMAAABgGZXtAAAAAXNSR0IArs4c6QAAABJQTFRFAAAAwMDAgICAVFRUFRIvAAAA0nul9QAAAAF0Uk5TAEDm2GYAAADPSURBVHjahZLRDcMgDET9kwHcDXoSE3SFDoAi3f6rVNhnAm2k8gHPT/hAJGZmtGuID/apivm+NhbfubterdzyXpxVcq2Z9N/tvVmtsxl5dSXP6nVzxu6wOOjqGMFHTtBRsUb6dCdaV6/YeKJRTjwdVgeASkoeBcAeTjycj3Kki8dRjsZIYnA3/jgaz6c/GiNJbMTTH5BLNsLdR5nT4HKZVO509yaXbEfmLnPdeZ7kejiw0oPjTckuF1zfd6av/5jS11Evso1K3zfye9v2B38A89dpyt/1ozAAAAAASUVORK5CYII=',
    }],
    ['Shadow Barrage', {
      name: 'Shadow Barrage',
      baseMaxHit: 28,
      attributes: ['shadow', 'barrage', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAQAAAA4PkBVAAAAAXNSR0IArs4c6QAAAPNJREFUeNrFllESgyAMRHM0jubRvFn6Ua1gdjeE2in8CNm8kB0HNeuHm1tlCL0fs4IiejfffZ/HSf2jsEfbVEG+y8+1+YbCOInrRZB583/YUpvc0Op+F5pth+mzpNL+T2DNWwkG9acDn6CnRiu9CGKjM1g7ZkwDbXL9VQfUQjClz2ChfgZr3eyC2BuuH+vcEhFM6ceEmBjqK/2VMD6ds9G9m3489Jcwj67cEoE3XB9Pg1a5YoBZUpef3WZh2BsJsxBMjGZ6M9VE6Vm+hKnt+BrKvJhZkyvwHZJGA738DiZGV/+apNHVkRi9hONGL+KeQBWNfgFe/8K86H308wAAAABJRU5ErkJggg==',
    }],
    ['Blood Barrage', {
      name: 'Blood Barrage',
      baseMaxHit: 29,
      attributes: ['blood', 'barrage', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACYAAAAoBAMAAABgGZXtAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA9QQChwEBXQEBNwEBAAAArfdRNAAAAAF0Uk5TAEDm2GYAAADPSURBVHjahZLRDcMgDET9kwHcDXoSE3SFDoAi3f6rVNhnAm2k8gHPT/hAJGZmtGuID/apivm+NhbfubterdzyXpxVcq2Z9N/tvVmtsxl5dSXP6nVzxu6wOOjqGMFHTtBRsUb6dCdaV6/YeKJRTjwdVgeASkoeBcAeTjycj3Kki8dRjsZIYnA3/jgaz6c/GiNJbMTTH5BLNsLdR5nT4HKZVO509yaXbEfmLnPdeZ7kejiw0oPjTckuF1zfd6av/5jS11Evso1K3zfye9v2B38A89dpyt/1ozAAAAAASUVORK5CYII=',
    }],
    ['Ice Barrage', {
      name: 'Ice Barrage',
      baseMaxHit: 30,
      attributes: ['ice', 'barrage', 'ancients'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACYAAAAoBAMAAABgGZXtAAAAAXNSR0IArs4c6QAAABJQTFRFAAAA////o6X7fH/2S0v7AAAA5mItHAAAAAF0Uk5TAEDm2GYAAADPSURBVHjahZLRDcMgDET9kwHcDXoSE3SFDoAi3f6rVNhnAm2k8gHPT/hAJGZmtGuID/apivm+NhbfubterdzyXpxVcq2Z9N/tvVmtsxl5dSXP6nVzxu6wOOjqGMFHTtBRsUb6dCdaV6/YeKJRTjwdVgeASkoeBcAeTjycj3Kki8dRjsZIYnA3/jgaz6c/GiNJbMTTH5BLNsLdR5nT4HKZVO509yaXbEfmLnPdeZ7kejiw0oPjTckuF1zfd6av/5jS11Evso1K3zfye9v2B38A89dpyt/1ozAAAAAASUVORK5CYII=',
    }],
    ['Magic dart', {
      name: 'Magic dart',
      baseMaxHit: 15,
      attributes: ['slayer', 'standard'],
      castSpeed: 5,
      icon: 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAAXNSR0IArs4c6QAAAB5QTFRFAAAAdtqqcNOka8+fV7yMQaZ2KZBgFHtLAmo6AAAAiz8nqAAAAAF0Uk5TAEDm2GYAAACnSURBVHjarc8xDsIwDAXQrBlzFOSpM16646EXqMQFQNwAtkAo8G+LrErEdley5fvZcVIyB3ri3SR6uZdSfkkGHlRc0oho5w0RkU10TlPUkwxAkXv9qZNMksF7ogGWMDcaqiU8wiZYmOETOYwAofYmEVQ0s84iE3QpM0a0wTVNWs6dvKSXVzIf7YeUzJGcInlfIjljS1Ik1ZPPLZLrH0jakISwnM4J5Auze1z4auRqQgAAAABJRU5ErkJggg==',
      requirements: {
        equipped: {
          weapon: [4170, 21255, 11791, 12904, 22296, 24144],
        },
      },
    }],
    ['Trident of the seas', {
      name: 'Trident of the seas',
      baseMaxHit: 20,
      attributes: ['powered'],
      castSpeed: 4,
    }],
    ['Trident of the swamp', {
      name: 'Trident of the swamp',
      baseMaxHit: 23,
      attributes: ['powered'],
      castSpeed: 4,
    }],
    ['Sanguinesti staff', {
      name: 'Sanguinesti staff',
      baseMaxHit: 24,
      attributes: ['powered'],
      castSpeed: 4,
    }],
  ])

  getByName(name) {
    return this.spells.get(name);
  }

  getByAttributes(attributes) {
    return [...this.spells]
      .map(([, spell]) => spell)
      .filter((spell) => difference(attributes, spell.attributes).length === 0);
  }
}

export default new SpellsManager();
