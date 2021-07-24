let carsPrediction = {};
let predictionCounter = 0;
let wrongPrediction = 0;
errRate = 0;
let confusionMatrix = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
];

predictionOnEnter = (event) => {
	let plateNumber = event.plateNumber;
	carsPrediction[plateNumber] = predictExitSegment(event);
};

predictionOnExit = (event) => {
	try {
		let plateNumber = event.plateNumber;
		let actualExitSegment = event.segment;
		let predictExitSegment = carsPrediction[plateNumber];
		if (predictExitSegment == undefined) predictExitSegment = actualExitSegment;
		predictionCounter++;
		if (actualExitSegment != predictExitSegment) wrongPrediction++;
		errRate = wrongPrediction / predictionCounter;
		confusionMatrix[predictExitSegment - 1][actualExitSegment - 1]++;

		console.log(
			`predicted ${predictExitSegment}, actual ${actualExitSegment}, rightPredict ${
				predictionCounter - wrongPrediction
			}, wrongPredict ${wrongPrediction}, errRate ${errRate}, total ${predictionCounter}`
		);
		// console.log(confusionMatrix);
	} catch (error) {
		console.error(error);
	}
};

/**
 *  Predictor for simulatedExitSegment from model/60fad2585e269e0554015675
 *  Predictive model by BigML - Machine Learning Made Easy
 */
predictExitSegment = function (data) {
	if (data.segment == null) {
		return "5";
	} else if (data.segment == "1") {
		if (data.dateMillisecond == null) {
			return "2";
		} else if (data.dateMillisecond > 514) {
			if (data.dateSecond == null) {
				return "2";
			} else if (data.dateSecond > 24) {
				if (data.dateMonth == null) {
					return "2";
				} else if (data.dateMonth > 1) {
					if (data.dateDayOfWeek == null) {
						return "2";
					} else if (data.dateDayOfWeek > 3) {
						if (data.platenumber == null) {
							return "2";
						} else if (data.platenumber > 87744573) {
							return "2";
						} else if (data.platenumber <= 87744573) {
							if (data.platenumber > 5164676) {
								if (data.dateMinute == null) {
									return "2";
								} else if (data.dateMinute > 25) {
									if (data.platenumber > 49219935) {
										return "2";
									} else if (data.platenumber <= 49219935) {
										return "2";
									}
								} else if (data.dateMinute <= 25) {
									return "2";
								}
							} else if (data.platenumber <= 5164676) {
								return "2";
							}
						}
					} else if (data.dateDayOfWeek <= 3) {
						if (data.dateHour == null) {
							return "2";
						} else if (data.dateHour > 16) {
							return "2";
						} else if (data.dateHour <= 16) {
							if (data.dateMinute == null) {
								return "2";
							} else if (data.dateMinute > 30) {
								return "2";
							} else if (data.dateMinute <= 30) {
								return "2";
							}
						}
					}
				} else if (data.dateMonth <= 1) {
					return "2";
				}
			} else if (data.dateSecond <= 24) {
				if (data.platenumber == null) {
					return "2";
				} else if (data.platenumber > 44257415) {
					if (data.vehicletype == null) {
						return "2";
					} else if (data.vehicletype == "TRUCK") {
						return "2";
					} else if (data.vehicletype != "TRUCK") {
						if (data.dateHour == null) {
							return "2";
						} else if (data.dateHour > 8) {
							if (data.dateMinute == null) {
								return "2";
							} else if (data.dateMinute > 3) {
								if (data.dateMinute > 44) {
									return "2";
								} else if (data.dateMinute <= 44) {
									return "2";
								}
							} else if (data.dateMinute <= 3) {
								return "4";
							}
						} else if (data.dateHour <= 8) {
							return "2";
						}
					}
				} else if (data.platenumber <= 44257415) {
					if (data.dateMillisecond > 752) {
						return "2";
					} else if (data.dateMillisecond <= 752) {
						return "2";
					}
				}
			}
		} else if (data.dateMillisecond <= 514) {
			if (data.platenumber == null) {
				return "2";
			} else if (data.platenumber > 13191030) {
				if (data.dateDayOfMonth == null) {
					return "2";
				} else if (data.dateDayOfMonth > 13) {
					if (data.dateMinute == null) {
						return "2";
					} else if (data.dateMinute > 13) {
						if (data.dateSecond == null) {
							return "2";
						} else if (data.dateSecond > 6) {
							if (data.vehicletype == null) {
								return "2";
							} else if (data.vehicletype == "COMMERCIAL") {
								return "2";
							} else if (data.vehicletype != "COMMERCIAL") {
								if (data.dateMillisecond > 107) {
									if (data.dateMillisecond > 158) {
										if (data.platenumber > 58211529) {
											return "2";
										} else if (data.platenumber <= 58211529) {
											return "2";
										}
									} else if (data.dateMillisecond <= 158) {
										return "2";
									}
								} else if (data.dateMillisecond <= 107) {
									return "2";
								}
							}
						} else if (data.dateSecond <= 6) {
							return "2";
						}
					} else if (data.dateMinute <= 13) {
						return "2";
					}
				} else if (data.dateDayOfMonth <= 13) {
					if (data.dateMillisecond > 225) {
						if (data.dateMinute == null) {
							return "2";
						} else if (data.dateMinute > 1) {
							if (data.dateHour == null) {
								return "2";
							} else if (data.dateHour > 16) {
								return "2";
							} else if (data.dateHour <= 16) {
								if (data.dateMillisecond > 290) {
									if (data.dateSecond == null) {
										return "2";
									} else if (data.dateSecond > 49) {
										return "2";
									} else if (data.dateSecond <= 49) {
										if (data.dateHour > 14) {
											return "2";
										} else if (data.dateHour <= 14) {
											return "2";
										}
									}
								} else if (data.dateMillisecond <= 290) {
									return "2";
								}
							}
						} else if (data.dateMinute <= 1) {
							return "4";
						}
					} else if (data.dateMillisecond <= 225) {
						if (data.dateMillisecond > 6) {
							if (data.dateHour == null) {
								return "2";
							} else if (data.dateHour > 1) {
								if (data.dateMillisecond > 105) {
									return "2";
								} else if (data.dateMillisecond <= 105) {
									if (data.dateSecond == null) {
										return "2";
									} else if (data.dateSecond > 58) {
										return "5";
									} else if (data.dateSecond <= 58) {
										return "2";
									}
								}
							} else if (data.dateHour <= 1) {
								return "2";
							}
						} else if (data.dateMillisecond <= 6) {
							return "4";
						}
					}
				}
			} else if (data.platenumber <= 13191030) {
				if (data.dateMillisecond > 58) {
					if (data.dateMinute == null) {
						return "2";
					} else if (data.dateMinute > 47) {
						return "2";
					} else if (data.dateMinute <= 47) {
						if (data.dateMillisecond > 480) {
							return "2";
						} else if (data.dateMillisecond <= 480) {
							return "2";
						}
					}
				} else if (data.dateMillisecond <= 58) {
					return "2";
				}
			}
		}
	} else if (data.segment != "1") {
		if (data.segment == "2") {
			if (data.dateDayOfWeek == null) {
				return "3";
			} else if (data.dateDayOfWeek > 5) {
				if (data.dateMillisecond == null) {
					return "3";
				} else if (data.dateMillisecond > 552) {
					if (data.dateMinute == null) {
						return "3";
					} else if (data.dateMinute > 49) {
						return "3";
					} else if (data.dateMinute <= 49) {
						if (data.dateHour == null) {
							return "3";
						} else if (data.dateHour > 11) {
							if (data.dateMonth == null) {
								return "3";
							} else if (data.dateMonth > 4) {
								return "3";
							} else if (data.dateMonth <= 4) {
								if (data.platenumber == null) {
									return "3";
								} else if (data.platenumber > 60950703) {
									return "2";
								} else if (data.platenumber <= 60950703) {
									return "3";
								}
							}
						} else if (data.dateHour <= 11) {
							return "3";
						}
					}
				} else if (data.dateMillisecond <= 552) {
					if (data.dateHour == null) {
						return "3";
					} else if (data.dateHour > 14) {
						if (data.dateSecond == null) {
							return "3";
						} else if (data.dateSecond > 49) {
							return "3";
						} else if (data.dateSecond <= 49) {
							if (data.dateSecond > 9) {
								return "3";
							} else if (data.dateSecond <= 9) {
								return "3";
							}
						}
					} else if (data.dateHour <= 14) {
						if (data.platenumber == null) {
							return "3";
						} else if (data.platenumber > 14658037) {
							if (data.dateHour > 13) {
								return "3";
							} else if (data.dateHour <= 13) {
								if (data.platenumber > 42965282) {
									if (data.specialdate == null) {
										return "3";
									} else if (data.specialdate == "false") {
										return "3";
									} else if (data.specialdate == "true") {
										return "3";
									}
								} else if (data.platenumber <= 42965282) {
									return "3";
								}
							}
						} else if (data.platenumber <= 14658037) {
							return "3";
						}
					}
				}
			} else if (data.dateDayOfWeek <= 5) {
				if (data.dateMinute == null) {
					return "3";
				} else if (data.dateMinute > 58) {
					return "3";
				} else if (data.dateMinute <= 58) {
					if (data.dateHour == null) {
						return "3";
					} else if (data.dateHour > 22) {
						return "3";
					} else if (data.dateHour <= 22) {
						if (data.platenumber == null) {
							return "3";
						} else if (data.platenumber > 6271825) {
							if (data.dateHour > 10) {
								if (data.dateSecond == null) {
									return "3";
								} else if (data.dateSecond > 34) {
									if (data.dateDayOfMonth == null) {
										return "3";
									} else if (data.dateDayOfMonth > 13) {
										if (data.dateSecond > 48) {
											return "3";
										} else if (data.dateSecond <= 48) {
											return "3";
										}
									} else if (data.dateDayOfMonth <= 13) {
										if (data.dateDayOfMonth > 9) {
											return "3";
										} else if (data.dateDayOfMonth <= 9) {
											return "3";
										}
									}
								} else if (data.dateSecond <= 34) {
									if (data.dateMinute > 45) {
										return "3";
									} else if (data.dateMinute <= 45) {
										if (data.dateMillisecond == null) {
											return "3";
										} else if (data.dateMillisecond > 491) {
											if (data.dateMillisecond > 572) {
												if (data.vehicletype == null) {
													return "3";
												} else if (data.vehicletype == "COMMERCIAL") {
													return "3";
												} else if (data.vehicletype != "COMMERCIAL") {
													if (data.dateSecond > 3) {
														if (data.dateDayOfMonth == null) {
															return "3";
														} else if (data.dateDayOfMonth > 28) {
															return "3";
														} else if (data.dateDayOfMonth <= 28) {
															return "3";
														}
													} else if (data.dateSecond <= 3) {
														return "3";
													}
												}
											} else if (data.dateMillisecond <= 572) {
												return "3";
											}
										} else if (data.dateMillisecond <= 491) {
											if (data.platenumber > 88032797) {
												return "3";
											} else if (data.platenumber <= 88032797) {
												if (data.dateDayOfMonth == null) {
													return "3";
												} else if (data.dateDayOfMonth > 3) {
													if (data.vehicletype == null) {
														return "3";
													} else if (data.vehicletype == "PERSONAL") {
														return "3";
													} else if (data.vehicletype != "PERSONAL") {
														return "3";
													}
												} else if (data.dateDayOfMonth <= 3) {
													return "3";
												}
											}
										}
									}
								}
							} else if (data.dateHour <= 10) {
								if (data.vehicletype == null) {
									return "3";
								} else if (data.vehicletype == "TRUCK") {
									return "3";
								} else if (data.vehicletype != "TRUCK") {
									if (data.dateMillisecond == null) {
										return "3";
									} else if (data.dateMillisecond > 820) {
										return "3";
									} else if (data.dateMillisecond <= 820) {
										if (data.dateSecond == null) {
											return "3";
										} else if (data.dateSecond > 22) {
											if (data.dateMinute > 10) {
												if (data.dateDayOfMonth == null) {
													return "3";
												} else if (data.dateDayOfMonth > 15) {
													if (data.dateMonth == null) {
														return "3";
													} else if (data.dateMonth > 1) {
														return "3";
													} else if (data.dateMonth <= 1) {
														return "3";
													}
												} else if (data.dateDayOfMonth <= 15) {
													if (data.dateDayOfMonth > 9) {
														return "3";
													} else if (data.dateDayOfMonth <= 9) {
														return "3";
													}
												}
											} else if (data.dateMinute <= 10) {
												return "3";
											}
										} else if (data.dateSecond <= 22) {
											if (data.dateMinute > 45) {
												return "3";
											} else if (data.dateMinute <= 45) {
												if (data.dateMillisecond > 788) {
													return "4";
												} else if (data.dateMillisecond <= 788) {
													if (data.dateMillisecond > 97) {
														if (data.dateMonth == null) {
															return "3";
														} else if (data.dateMonth > 5) {
															return "3";
														} else if (data.dateMonth <= 5) {
															return "3";
														}
													} else if (data.dateMillisecond <= 97) {
														return "3";
													}
												}
											}
										}
									}
								}
							}
						} else if (data.platenumber <= 6271825) {
							return "3";
						}
					}
				}
			}
		} else if (data.segment != "2") {
			if (data.segment == "3") {
				if (data.dateMillisecond == null) {
					return "4";
				} else if (data.dateMillisecond > 760) {
					if (data.dateMinute == null) {
						return "4";
					} else if (data.dateMinute > 1) {
						if (data.dateMinute > 54) {
							return "4";
						} else if (data.dateMinute <= 54) {
							if (data.platenumber == null) {
								return "4";
							} else if (data.platenumber > 38439407) {
								if (data.dateMillisecond > 827) {
									if (data.platenumber > 45860074) {
										if (data.dateMonth == null) {
											return "4";
										} else if (data.dateMonth > 6) {
											return "4";
										} else if (data.dateMonth <= 6) {
											if (data.dateMillisecond > 837) {
												if (data.dateMillisecond > 866) {
													if (data.dateDayOfWeek == null) {
														return "4";
													} else if (data.dateDayOfWeek > 3) {
														return "4";
													} else if (data.dateDayOfWeek <= 3) {
														return "4";
													}
												} else if (data.dateMillisecond <= 866) {
													return "4";
												}
											} else if (data.dateMillisecond <= 837) {
												return "4";
											}
										}
									} else if (data.platenumber <= 45860074) {
										return "4";
									}
								} else if (data.dateMillisecond <= 827) {
									return "4";
								}
							} else if (data.platenumber <= 38439407) {
								if (data.dateDayOfWeek == null) {
									return "4";
								} else if (data.dateDayOfWeek > 1) {
									if (data.dateDayOfMonth == null) {
										return "4";
									} else if (data.dateDayOfMonth > 29) {
										return "5";
									} else if (data.dateDayOfMonth <= 29) {
										if (data.dateMonth == null) {
											return "4";
										} else if (data.dateMonth > 6) {
											return "4";
										} else if (data.dateMonth <= 6) {
											if (data.dateSecond == null) {
												return "4";
											} else if (data.dateSecond > 23) {
												return "4";
											} else if (data.dateSecond <= 23) {
												return "4";
											}
										}
									}
								} else if (data.dateDayOfWeek <= 1) {
									return "4";
								}
							}
						}
					} else if (data.dateMinute <= 1) {
						return "4";
					}
				} else if (data.dateMillisecond <= 760) {
					if (data.dateMinute == null) {
						return "4";
					} else if (data.dateMinute > 54) {
						if (data.dateSecond == null) {
							return "4";
						} else if (data.dateSecond > 11) {
							return "4";
						} else if (data.dateSecond <= 11) {
							return "4";
						}
					} else if (data.dateMinute <= 54) {
						if (data.dateSecond == null) {
							return "4";
						} else if (data.dateSecond > 12) {
							if (data.dateDayOfWeek == null) {
								return "4";
							} else if (data.dateDayOfWeek > 1) {
								if (data.platenumber == null) {
									return "4";
								} else if (data.platenumber > 3286029) {
									if (data.dateMillisecond > 599) {
										if (data.platenumber > 46102782) {
											if (data.platenumber > 60738383) {
												return "4";
											} else if (data.platenumber <= 60738383) {
												return "4";
											}
										} else if (data.platenumber <= 46102782) {
											if (data.platenumber > 33049059) {
												return "4";
											} else if (data.platenumber <= 33049059) {
												return "4";
											}
										}
									} else if (data.dateMillisecond <= 599) {
										if (data.dateMillisecond > 577) {
											return "4";
										} else if (data.dateMillisecond <= 577) {
											if (data.dateMillisecond > 15) {
												if (data.dateDayOfWeek > 4) {
													if (data.dateMinute > 48) {
														return "4";
													} else if (data.dateMinute <= 48) {
														if (data.dateMillisecond > 86) {
															if (data.dateHour == null) {
																return "4";
															} else if (data.dateHour > 20) {
																return "4";
															} else if (data.dateHour <= 20) {
																if (data.dateMinute > 3) {
																	if (data.dateDayOfMonth == null) {
																		return "4";
																	} else if (data.dateDayOfMonth > 24) {
																		return "4";
																	} else if (data.dateDayOfMonth <= 24) {
																		if (data.dateDayOfMonth > 19) {
																			return "4";
																		} else if (data.dateDayOfMonth <= 19) {
																			if (data.platenumber > 43978792) {
																				return "4";
																			} else if (data.platenumber <= 43978792) {
																				return "4";
																			}
																		}
																	}
																} else if (data.dateMinute <= 3) {
																	return "4";
																}
															}
														} else if (data.dateMillisecond <= 86) {
															return "4";
														}
													}
												} else if (data.dateDayOfWeek <= 4) {
													if (data.dateMinute > 44) {
														return "4";
													} else if (data.dateMinute <= 44) {
														if (data.dateSecond > 41) {
															if (data.dateMonth == null) {
																return "4";
															} else if (data.dateMonth > 2) {
																if (data.platenumber > 7967334) {
																	return "4";
																} else if (data.platenumber <= 7967334) {
																	return "3";
																}
															} else if (data.dateMonth <= 2) {
																return "4";
															}
														} else if (data.dateSecond <= 41) {
															if (data.dateMinute > 5) {
																if (data.dateHour == null) {
																	return "4";
																} else if (data.dateHour > 2) {
																	if (data.dateHour > 6) {
																		if (data.dateMillisecond > 556) {
																			return "5";
																		} else if (data.dateMillisecond <= 556) {
																			if (data.dateMonth == null) {
																				return "4";
																			} else if (data.dateMonth > 3) {
																				return "4";
																			} else if (data.dateMonth <= 3) {
																				return "4";
																			}
																		}
																	} else if (data.dateHour <= 6) {
																		return "4";
																	}
																} else if (data.dateHour <= 2) {
																	return "4";
																}
															} else if (data.dateMinute <= 5) {
																return "4";
															}
														}
													}
												}
											} else if (data.dateMillisecond <= 15) {
												return "4";
											}
										}
									}
								} else if (data.platenumber <= 3286029) {
									return "4";
								}
							} else if (data.dateDayOfWeek <= 1) {
								if (data.dateDayOfMonth == null) {
									return "4";
								} else if (data.dateDayOfMonth > 7) {
									if (data.dateMinute > 4) {
										return "4";
									} else if (data.dateMinute <= 4) {
										return "4";
									}
								} else if (data.dateDayOfMonth <= 7) {
									return "4";
								}
							}
						} else if (data.dateSecond <= 12) {
							if (data.dateSecond > 11) {
								return "4";
							} else if (data.dateSecond <= 11) {
								if (data.dateHour == null) {
									return "4";
								} else if (data.dateHour > 8) {
									if (data.dateDayOfWeek == null) {
										return "4";
									} else if (data.dateDayOfWeek > 5) {
										return "4";
									} else if (data.dateDayOfWeek <= 5) {
										if (data.dateMinute > 26) {
											if (data.dateDayOfMonth == null) {
												return "4";
											} else if (data.dateDayOfMonth > 30) {
												return "5";
											} else if (data.dateDayOfMonth <= 30) {
												return "4";
											}
										} else if (data.dateMinute <= 26) {
											return "4";
										}
									}
								} else if (data.dateHour <= 8) {
									return "4";
								}
							}
						}
					}
				}
			} else if (data.segment != "3") {
				if (data.segment == "4") {
					if (data.vehicletype == null) {
						return "5";
					} else if (data.vehicletype == "PERSONAL") {
						if (data.dateSecond == null) {
							return "5";
						} else if (data.dateSecond > 58) {
							return "4";
						} else if (data.dateSecond <= 58) {
							if (data.dateMillisecond == null) {
								return "5";
							} else if (data.dateMillisecond > 35) {
								if (data.dateDayOfWeek == null) {
									return "5";
								} else if (data.dateDayOfWeek > 5) {
									if (data.dateSecond > 4) {
										if (data.dateDayOfMonth == null) {
											return "5";
										} else if (data.dateDayOfMonth > 30) {
											return "5";
										} else if (data.dateDayOfMonth <= 30) {
											if (data.dateMillisecond > 172) {
												if (data.dateSecond > 57) {
													return "4";
												} else if (data.dateSecond <= 57) {
													if (data.dateMonth == null) {
														return "5";
													} else if (data.dateMonth > 4) {
														if (data.dateDayOfMonth > 24) {
															return "5";
														} else if (data.dateDayOfMonth <= 24) {
															return "5";
														}
													} else if (data.dateMonth <= 4) {
														if (data.dateSecond > 33) {
															return "5";
														} else if (data.dateSecond <= 33) {
															return "5";
														}
													}
												}
											} else if (data.dateMillisecond <= 172) {
												return "5";
											}
										}
									} else if (data.dateSecond <= 4) {
										return "5";
									}
								} else if (data.dateDayOfWeek <= 5) {
									if (data.dateMinute == null) {
										return "5";
									} else if (data.dateMinute > 0) {
										if (data.dateSecond > 1) {
											if (data.dateMillisecond > 69) {
												if (data.dateMillisecond > 517) {
													if (data.dateSecond > 57) {
														return "5";
													} else if (data.dateSecond <= 57) {
														if (data.dateSecond > 22) {
															if (data.specialdate == null) {
																return "5";
															} else if (data.specialdate == "false") {
																if (data.dateMillisecond > 873) {
																	return "5";
																} else if (data.dateMillisecond <= 873) {
																	if (data.platenumber == null) {
																		return "5";
																	} else if (data.platenumber > 19098541) {
																		if (data.dateMinute > 23) {
																			if (data.dateMinute > 53) {
																				return "5";
																			} else if (data.dateMinute <= 53) {
																				if (data.dateSecond > 54) {
																					return "5";
																				} else if (data.dateSecond <= 54) {
																					if (data.dateDayOfWeek > 3) {
																						return "5";
																					} else if (data.dateDayOfWeek <= 3) {
																						return "4";
																					}
																				}
																			}
																		} else if (data.dateMinute <= 23) {
																			return "5";
																		}
																	} else if (data.platenumber <= 19098541) {
																		return "4";
																	}
																}
															} else if (data.specialdate == "true") {
																return "5";
															}
														} else if (data.dateSecond <= 22) {
															if (data.platenumber == null) {
																return "5";
															} else if (data.platenumber > 96022736) {
																return "5";
															} else if (data.platenumber <= 96022736) {
																if (data.platenumber > 73006371) {
																	return "5";
																} else if (data.platenumber <= 73006371) {
																	if (data.dateDayOfMonth == null) {
																		return "5";
																	} else if (data.dateDayOfMonth > 8) {
																		return "5";
																	} else if (data.dateDayOfMonth <= 8) {
																		return "5";
																	}
																}
															}
														}
													}
												} else if (data.dateMillisecond <= 517) {
													if (data.dateMillisecond > 475) {
														return "4";
													} else if (data.dateMillisecond <= 475) {
														if (data.dateMinute > 49) {
															return "5";
														} else if (data.dateMinute <= 49) {
															if (data.dateDayOfWeek > 3) {
																if (data.dateHour == null) {
																	return "5";
																} else if (data.dateHour > 22) {
																	return "5";
																} else if (data.dateHour <= 22) {
																	if (data.dateSecond > 55) {
																		return "4";
																	} else if (data.dateSecond <= 55) {
																		if (data.platenumber == null) {
																			return "5";
																		} else if (data.platenumber > 42200443) {
																			return "5";
																		} else if (data.platenumber <= 42200443) {
																			return "5";
																		}
																	}
																}
															} else if (data.dateDayOfWeek <= 3) {
																if (data.dateDayOfMonth == null) {
																	return "5";
																} else if (data.dateDayOfMonth > 7) {
																	if (data.dateMinute > 2) {
																		if (data.dateMillisecond > 360) {
																			return "5";
																		} else if (data.dateMillisecond <= 360) {
																			if (data.dateMinute > 4) {
																				return "5";
																			} else if (data.dateMinute <= 4) {
																				return "4";
																			}
																		}
																	} else if (data.dateMinute <= 2) {
																		return "5";
																	}
																} else if (data.dateDayOfMonth <= 7) {
																	return "4";
																}
															}
														}
													}
												}
											} else if (data.dateMillisecond <= 69) {
												return "5";
											}
										} else if (data.dateSecond <= 1) {
											return "5";
										}
									} else if (data.dateMinute <= 0) {
										return "4";
									}
								}
							} else if (data.dateMillisecond <= 35) {
								return "5";
							}
						}
					} else if (data.vehicletype != "PERSONAL") {
						if (data.dateDayOfMonth == null) {
							return "5";
						} else if (data.dateDayOfMonth > 29) {
							return "5";
						} else if (data.dateDayOfMonth <= 29) {
							if (data.dateMinute == null) {
								return "5";
							} else if (data.dateMinute > 58) {
								return "4";
							} else if (data.dateMinute <= 58) {
								if (data.dateDayOfMonth > 9) {
									if (data.dateMillisecond == null) {
										return "5";
									} else if (data.dateMillisecond > 408) {
										if (data.dateSecond == null) {
											return "5";
										} else if (data.dateSecond > 3) {
											if (data.dateMillisecond > 920) {
												return "5";
											} else if (data.dateMillisecond <= 920) {
												if (data.dateHour == null) {
													return "5";
												} else if (data.dateHour > 21) {
													return "5";
												} else if (data.dateHour <= 21) {
													if (data.platenumber == null) {
														return "5";
													} else if (data.platenumber > 95290820) {
														return "5";
													} else if (data.platenumber <= 95290820) {
														if (data.dateDayOfMonth > 27) {
															return "5";
														} else if (data.dateDayOfMonth <= 27) {
															if (data.platenumber > 53258080) {
																return "5";
															} else if (data.platenumber <= 53258080) {
																if (data.dateMinute > 2) {
																	if (data.platenumber > 1229032) {
																		if (data.dateDayOfMonth > 19) {
																			return "5";
																		} else if (data.dateDayOfMonth <= 19) {
																			return "5";
																		}
																	} else if (data.platenumber <= 1229032) {
																		return "4";
																	}
																} else if (data.dateMinute <= 2) {
																	return "5";
																}
															}
														}
													}
												}
											}
										} else if (data.dateSecond <= 3) {
											return "5";
										}
									} else if (data.dateMillisecond <= 408) {
										if (data.dateDayOfMonth > 11) {
											if (data.dateMillisecond > 39) {
												if (data.dateSecond == null) {
													return "5";
												} else if (data.dateSecond > 14) {
													return "5";
												} else if (data.dateSecond <= 14) {
													return "5";
												}
											} else if (data.dateMillisecond <= 39) {
												return "5";
											}
										} else if (data.dateDayOfMonth <= 11) {
											return "5";
										}
									}
								} else if (data.dateDayOfMonth <= 9) {
									if (data.dateMonth == null) {
										return "5";
									} else if (data.dateMonth > 6) {
										return "4";
									} else if (data.dateMonth <= 6) {
										if (data.dateMillisecond == null) {
											return "5";
										} else if (data.dateMillisecond > 39) {
											if (data.dateMillisecond > 160) {
												if (data.platenumber == null) {
													return "5";
												} else if (data.platenumber > 97448534) {
													return "4";
												} else if (data.platenumber <= 97448534) {
													if (data.platenumber > 39345847) {
														return "5";
													} else if (data.platenumber <= 39345847) {
														return "5";
													}
												}
											} else if (data.dateMillisecond <= 160) {
												return "5";
											}
										} else if (data.dateMillisecond <= 39) {
											return "5";
										}
									}
								}
							}
						}
					}
				} else if (data.segment != "4") {
					return "5";
				}
			}
		}
	}
	return null;
};

module.exports = {
	predictionOnEnter,
	predictionOnExit,
	predictionCounter,
	confusionMatrix,
};
