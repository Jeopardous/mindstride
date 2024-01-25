
interface Answer {
  title: string;
  dependent_questions?: Question[];
}

interface Question {
  id: number;
  question: string;
  answer: Record<string, Answer>;
}

export const questionData : Question[] = [
  {
    id: 1,
    question: 'How would you describe your overall mood in the past week?',
    answer: {
      1: {
        title: 'Very negative',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      2: {
        title: 'Generally negative',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      3: {
        title: 'Neutral',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      4: {
        title: 'Generally positive',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      5: {
        title: 'Very positive',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  {
    id: 2,
    question: 'How well have you been sleeping recently?',
    answer: {
      1: {
        title: 'Very poorly',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      2: {
        title: 'Generally poorly',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      3: {
        title: 'Average',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      4: {
        title: 'Generally well',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      5: {
        title: 'Very well',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  {
    id: 3,
    question: 'How would you rate your level of stress in your daily life?',
    answer: {
      1: {
        title: 'Very High',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      2: {
        title: 'High',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      3: {
        title: 'Moderate',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      4: {
        title: 'Low',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      5: {
        title: 'Very Low',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  {
    id: 4,
    question:
      'In the past month, how often have you felt overwhelmed or unable to cope with daily challenges?',
    answer: {
      1: {
        title: 'Rarely or never',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      2: {
        title: 'Occasionally',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      3: {
        title: 'Sometimes',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      4: {
        title: 'Frequently',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      5: {
        title: 'Almost always',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  {
    id: 5,
    question:
      'How satisfied are you with your social relationships and connections?',
    answer: {
      1: {
        title: 'Very dissatisfied',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      2: {
        title: 'Dissatisfied',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      3: {
        title: 'Neutral',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      4: {
        title: 'Satisfied',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
      5: {
        title: 'Very satisfied',
        score: 1.1,
        dependent_questions: {
          id: 1,
          question: 'Why do you feel this way?',
          answer: {
            1: {
              title: 'Personal reasons',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            2: {
              title: 'Work-related',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
            3: {
              title: 'Health issues',
              score: 1.2,
              dependent_questions: {
                id: 1,
                question: 'Why do you feel this way?',
                answer: {
                  1: {
                    title: 'Personal reasons',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  2: {
                    title: 'Work-related',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                  3: {
                    title: 'Health issues',
                    score: 1.2,
                    dependent_questions: 'None',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
];
