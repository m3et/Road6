/**
 *  Predictor for segment from model/60f0b6b49193b9173300aedc
 *  Predictive model by BigML - Machine Learning Made Easy
 */
module.exports.predictExitSegment = function (data) {
	if (data.event == null) {
		return 3.37792;
	} else if (data.event == "EXIT_ROAD") {
		return 3.85349;
	} else if (data.event != "EXIT_ROAD") {
		if (data.dateDayOfMonth == null) {
			return 3.25029;
		} else if (data.dateDayOfMonth > 13) {
			if (data.dateMillisecond == null) {
				return 3.30953;
			} else if (data.dateMillisecond > 93) {
				if (data.dateDayOfWeek == null) {
					return 3.33781;
				} else if (data.dateDayOfWeek > 2) {
					if (data.dateHour == null) {
						return 3.39231;
					} else if (data.dateHour > 14) {
						if (data.dateMonth == null) {
							return 3.51894;
						} else if (data.dateMonth > 1) {
							if (data.dateMinute == null) {
								return 3.44947;
							} else if (data.dateMinute > 48) {
								if (data.platenumber == null) {
									return 3.775;
								} else if (data.platenumber > 90928969) {
									if (data.dateHour > 19) {
										return 2;
									} else if (data.dateHour <= 19) {
										if (data.dateMinute > 50) {
											return 4.2;
										} else if (data.dateMinute <= 50) {
											return 1.66667;
										}
									}
								} else if (data.platenumber <= 90928969) {
									return 3.89209;
								}
							} else if (data.dateMinute <= 48) {
								if (data.dateMinute > 27) {
									if (data.dateMillisecond > 780) {
										return 2.856;
									} else if (data.dateMillisecond <= 780) {
										if (data.dateMinute > 28) {
											if (data.dateMinute > 30) {
												if (data.platenumber == null) {
													return 3.36596;
												} else if (data.platenumber > 96174321) {
													return 1.5;
												} else if (data.platenumber <= 96174321) {
													if (data.dateMinute > 33) {
														if (data.platenumber > 18421172) {
															if (data.vehicletype == null) {
																return 3.39103;
															} else if (data.vehicletype == "COMMERCIAL") {
																if (data.dateDayOfWeek > 3) {
																	return 2;
																} else if (data.dateDayOfWeek <= 3) {
																	return 4;
																}
															} else if (data.vehicletype != "COMMERCIAL") {
																if (data.dateHour > 16) {
																	return 3.39516;
																} else if (data.dateHour <= 16) {
																	return 4.66667;
																}
															}
														} else if (data.platenumber <= 18421172) {
															return 2.58621;
														}
													} else if (data.dateMinute <= 33) {
														return 3.93478;
													}
												}
											} else if (data.dateMinute <= 30) {
												return 2.23529;
											}
										} else if (data.dateMinute <= 28) {
											return 4.5;
										}
									}
								} else if (data.dateMinute <= 27) {
									if (data.dateHour > 16) {
										if (data.platenumber == null) {
											return 3.66849;
										} else if (data.platenumber > 21192328) {
											if (data.dateMinute > 9) {
												if (data.dateDayOfWeek > 5) {
													return 4.09434;
												} else if (data.dateDayOfWeek <= 5) {
													if (data.dateMillisecond > 985) {
														return 1.5;
													} else if (data.dateMillisecond <= 985) {
														return 3.36275;
													}
												}
											} else if (data.dateMinute <= 9) {
												return 4.09735;
											}
										} else if (data.platenumber <= 21192328) {
											if (data.dateDayOfWeek > 3) {
												if (data.dateDayOfWeek > 6) {
													return 4.16667;
												} else if (data.dateDayOfWeek <= 6) {
													if (data.dateDayOfMonth > 19) {
														if (data.dateMillisecond > 755) {
															return 4.5;
														} else if (data.dateMillisecond <= 755) {
															return 2.88235;
														}
													} else if (data.dateDayOfMonth <= 19) {
														return 2.11111;
													}
												}
											} else if (data.dateDayOfWeek <= 3) {
												return 4.19048;
											}
										}
									} else if (data.dateHour <= 16) {
										if (data.dateDayOfMonth > 19) {
											if (data.dateMinute > 20) {
												return 4.2;
											} else if (data.dateMinute <= 20) {
												if (data.dateMonth > 5) {
													if (data.dateDayOfWeek > 6) {
														return 2.4;
													} else if (data.dateDayOfWeek <= 6) {
														return 5;
													}
												} else if (data.dateMonth <= 5) {
													return 2.2;
												}
											}
										} else if (data.dateDayOfMonth <= 19) {
											return 3.59375;
										}
									}
								}
							}
						} else if (data.dateMonth <= 1) {
							if (data.dateHour > 21) {
								if (data.dateMillisecond > 936) {
									return 1.83333;
								} else if (data.dateMillisecond <= 936) {
									if (data.specialdate == null) {
										return 3.53571;
									} else if (data.specialdate == "true") {
										return 1.5;
									} else if (data.specialdate == "false") {
										return 3.69231;
									}
								}
							} else if (data.dateHour <= 21) {
								if (data.dateDayOfWeek > 5) {
									return 4.24444;
								} else if (data.dateDayOfWeek <= 5) {
									return 3.73171;
								}
							}
						}
					} else if (data.dateHour <= 14) {
						if (data.dateMillisecond > 305) {
							if (data.dateHour > 3) {
								if (data.dateMillisecond > 509) {
									if (data.dateDayOfWeek > 6) {
										if (data.dateMillisecond > 793) {
											if (data.dateDayOfMonth > 20) {
												if (data.vehicletype == null) {
													return 4.34375;
												} else if (data.vehicletype == "TRUCK") {
													return 2.5;
												} else if (data.vehicletype != "TRUCK") {
													return 4.46667;
												}
											} else if (data.dateDayOfMonth <= 20) {
												if (data.dateMonth == null) {
													return 3;
												} else if (data.dateMonth > 1) {
													if (data.dateMillisecond > 932) {
														return 4.5;
													} else if (data.dateMillisecond <= 932) {
														return 2.11111;
													}
												} else if (data.dateMonth <= 1) {
													return 4.66667;
												}
											}
										} else if (data.dateMillisecond <= 793) {
											if (data.dateMonth == null) {
												return 3.2314;
											} else if (data.dateMonth > 5) {
												if (data.dateMillisecond > 550) {
													return 1.75;
												} else if (data.dateMillisecond <= 550) {
													return 5;
												}
											} else if (data.dateMonth <= 5) {
												if (data.dateMinute == null) {
													return 3.42718;
												} else if (data.dateMinute > 49) {
													return 2.30769;
												} else if (data.dateMinute <= 49) {
													if (data.platenumber == null) {
														return 3.58889;
													} else if (data.platenumber > 98631535) {
														return 1.5;
													} else if (data.platenumber <= 98631535) {
														return 3.68605;
													}
												}
											}
										}
									} else if (data.dateDayOfWeek <= 6) {
										if (data.platenumber == null) {
											return 3.18618;
										} else if (data.platenumber > 9820671) {
											if (data.dateMonth == null) {
												return 3.13961;
											} else if (data.dateMonth > 6) {
												return 2;
											} else if (data.dateMonth <= 6) {
												return 3.16796;
											}
										} else if (data.platenumber <= 9820671) {
											if (data.dateMillisecond > 914) {
												return 2;
											} else if (data.dateMillisecond <= 914) {
												return 4.04545;
											}
										}
									}
								} else if (data.dateMillisecond <= 509) {
									if (data.vehicletype == null) {
										return 3.4925;
									} else if (data.vehicletype == "COMMERCIAL") {
										return 3.91453;
									} else if (data.vehicletype != "COMMERCIAL") {
										if (data.dateMillisecond > 407) {
											if (data.dateDayOfMonth > 27) {
												return 4.625;
											} else if (data.dateDayOfMonth <= 27) {
												if (data.platenumber == null) {
													return 3.42623;
												} else if (data.platenumber > 96144013) {
													return 1.5;
												} else if (data.platenumber <= 96144013) {
													return 3.49153;
												}
											}
										} else if (data.dateMillisecond <= 407) {
											if (data.dateDayOfMonth > 27) {
												if (data.dateMonth == null) {
													return 2.33333;
												} else if (data.dateMonth > 2) {
													return 1.72727;
												} else if (data.dateMonth <= 2) {
													if (data.dateMillisecond > 336) {
														return 4.25;
													} else if (data.dateMillisecond <= 336) {
														return 2.16667;
													}
												}
											} else if (data.dateDayOfMonth <= 27) {
												return 3.38835;
											}
										}
									}
								}
							} else if (data.dateHour <= 3) {
								if (data.dateDayOfMonth > 20) {
									if (data.dateMinute == null) {
										return 3.7251;
									} else if (data.dateMinute > 45) {
										return 4.35135;
									} else if (data.dateMinute <= 45) {
										if (data.dateMinute > 39) {
											return 2.7037;
										} else if (data.dateMinute <= 39) {
											return 3.74866;
										}
									}
								} else if (data.dateDayOfMonth <= 20) {
									if (data.dateDayOfMonth > 15) {
										if (data.dateHour > 2) {
											if (data.dateMinute == null) {
												return 3.66667;
											} else if (data.dateMinute > 7) {
												return 4.08511;
											} else if (data.dateMinute <= 7) {
												return 2.63158;
											}
										} else if (data.dateHour <= 2) {
											if (data.dateMinute == null) {
												return 2.79612;
											} else if (data.dateMinute > 5) {
												return 2.59341;
											} else if (data.dateMinute <= 5) {
												return 4.33333;
											}
										}
									} else if (data.dateDayOfMonth <= 15) {
										return 3.89655;
									}
								}
							}
						} else if (data.dateMillisecond <= 305) {
							if (data.dateMillisecond > 284) {
								if (data.platenumber == null) {
									return 2.3913;
								} else if (data.platenumber > 19607590) {
									if (data.platenumber > 86081071) {
										return 5;
									} else if (data.platenumber <= 86081071) {
										return 2.08475;
									}
								} else if (data.platenumber <= 19607590) {
									return 4;
								}
							} else if (data.dateMillisecond <= 284) {
								if (data.platenumber == null) {
									return 3.21887;
								} else if (data.platenumber > 26179403) {
									if (data.dateMonth == null) {
										return 3.35092;
									} else if (data.dateMonth > 4) {
										return 3.66667;
									} else if (data.dateMonth <= 4) {
										if (data.dateHour > 9) {
											if (data.dateDayOfWeek > 3) {
												if (data.platenumber > 49462247) {
													return 2.44444;
												} else if (data.platenumber <= 49462247) {
													if (data.platenumber > 30547944) {
														return 3.81818;
													} else if (data.platenumber <= 30547944) {
														return 1.5;
													}
												}
											} else if (data.dateDayOfWeek <= 3) {
												return 4.2;
											}
										} else if (data.dateHour <= 9) {
											if (data.dateMinute == null) {
												return 3.44828;
											} else if (data.dateMinute > 31) {
												if (data.dateMonth > 1) {
													if (data.dateMinute > 46) {
														if (data.dateSecond == null) {
															return 3;
														} else if (data.dateSecond > 23) {
															if (data.dateMillisecond > 240) {
																return 3.85714;
															} else if (data.dateMillisecond <= 240) {
																return 2;
															}
														} else if (data.dateSecond <= 23) {
															return 4.75;
														}
													} else if (data.dateMinute <= 46) {
														return 1.6;
													}
												} else if (data.dateMonth <= 1) {
													return 4;
												}
											} else if (data.dateMinute <= 31) {
												return 3.75;
											}
										}
									}
								} else if (data.platenumber <= 26179403) {
									if (data.dateMonth == null) {
										return 2.88742;
									} else if (data.dateMonth > 1) {
										if (data.dateMillisecond > 182) {
											return 3.42466;
										} else if (data.dateMillisecond <= 182) {
											if (data.dateMillisecond > 107) {
												return 2.37931;
											} else if (data.dateMillisecond <= 107) {
												return 5;
											}
										}
									} else if (data.dateMonth <= 1) {
										return 1.75;
									}
								}
							}
						}
					}
				} else if (data.dateDayOfWeek <= 2) {
					if (data.dateDayOfMonth > 25) {
						return 2.94293;
					} else if (data.dateDayOfMonth <= 25) {
						if (data.dateHour == null) {
							return 3.29799;
						} else if (data.dateHour > 7) {
							if (data.dateMinute == null) {
								return 3.38472;
							} else if (data.dateMinute > 3) {
								if (data.platenumber == null) {
									return 3.44039;
								} else if (data.platenumber > 64271500) {
									if (data.vehicletype == null) {
										return 3.20408;
									} else if (data.vehicletype == "TRUCK") {
										return 4;
									} else if (data.vehicletype != "TRUCK") {
										if (data.dateMillisecond > 220) {
											if (data.dateHour > 14) {
												if (data.dateMinute > 45) {
													return 1.9;
												} else if (data.dateMinute <= 45) {
													if (data.platenumber > 87261772) {
														if (data.platenumber > 99749522) {
															return 5;
														} else if (data.platenumber <= 99749522) {
															return 1.84211;
														}
													} else if (data.platenumber <= 87261772) {
														if (data.dateMonth == null) {
															return 3.07692;
														} else if (data.dateMonth > 2) {
															return 2.86364;
														} else if (data.dateMonth <= 2) {
															if (data.dateHour > 20) {
																return 2;
															} else if (data.dateHour <= 20) {
																return 5;
															}
														}
													}
												}
											} else if (data.dateHour <= 14) {
												return 3.31373;
											}
										} else if (data.dateMillisecond <= 220) {
											return 4.22222;
										}
									}
								} else if (data.platenumber <= 64271500) {
									return 3.5641;
								}
							} else if (data.dateMinute <= 3) {
								if (data.dateMillisecond > 165) {
									if (data.dateMonth == null) {
										return 2.43137;
									} else if (data.dateMonth > 2) {
										return 2;
									} else if (data.dateMonth <= 2) {
										if (data.dateHour > 14) {
											return 2.6;
										} else if (data.dateHour <= 14) {
											return 4.66667;
										}
									}
								} else if (data.dateMillisecond <= 165) {
									return 4.5;
								}
							}
						} else if (data.dateHour <= 7) {
							if (data.dateMinute == null) {
								return 3.09006;
							} else if (data.dateMinute > 56) {
								return 4.125;
							} else if (data.dateMinute <= 56) {
								if (data.dateMillisecond > 920) {
									return 1.83333;
								} else if (data.dateMillisecond <= 920) {
									if (data.vehicletype == null) {
										return 3.08503;
									} else if (data.vehicletype == "COMMERCIAL") {
										if (data.dateMillisecond > 132) {
											return 4.52941;
										} else if (data.dateMillisecond <= 132) {
											return 2.66667;
										}
									} else if (data.vehicletype != "COMMERCIAL") {
										if (data.dateHour > 0) {
											if (data.dateMonth == null) {
												return 2.93281;
											} else if (data.dateMonth > 4) {
												if (data.dateMinute > 3) {
													return 2.53061;
												} else if (data.dateMinute <= 3) {
													return 4.5;
												}
											} else if (data.dateMonth <= 4) {
												if (data.dateHour > 3) {
													if (data.dateDayOfMonth > 15) {
														return 2.51923;
													} else if (data.dateDayOfMonth <= 15) {
														return 4.66667;
													}
												} else if (data.dateHour <= 3) {
													return 3.4086;
												}
											}
										} else if (data.dateHour <= 0) {
											return 4;
										}
									}
								}
							}
						}
					}
				}
			} else if (data.dateMillisecond <= 93) {
				if (data.platenumber == null) {
					return 3.04938;
				} else if (data.platenumber > 75150656) {
					if (data.platenumber > 92763346) {
						if (data.platenumber > 98153249) {
							return 1.5;
						} else if (data.platenumber <= 98153249) {
							return 3.57143;
						}
					} else if (data.platenumber <= 92763346) {
						return 2.2459;
					}
				} else if (data.platenumber <= 75150656) {
					if (data.dateDayOfWeek == null) {
						return 3.13596;
					} else if (data.dateDayOfWeek > 2) {
						if (data.specialdate == null) {
							return 2.98305;
						} else if (data.specialdate == "false") {
							if (data.dateMinute == null) {
								return 3.08784;
							} else if (data.dateMinute > 41) {
								return 3.72414;
							} else if (data.dateMinute <= 41) {
								return 2.93277;
							}
						} else if (data.specialdate == "true") {
							if (data.platenumber > 53031802) {
								if (data.vehicletype == null) {
									return 3.33333;
								} else if (data.vehicletype == "PERSONAL") {
									return 2.81818;
								} else if (data.vehicletype != "PERSONAL") {
									return 4.75;
								}
							} else if (data.platenumber <= 53031802) {
								return 1.5;
							}
						}
					} else if (data.dateDayOfWeek <= 2) {
						if (data.dateMinute == null) {
							return 3.66667;
						} else if (data.dateMinute > 53) {
							if (data.dateMillisecond > 61) {
								return 4.71429;
							} else if (data.dateMillisecond <= 61) {
								return 1.71429;
							}
						} else if (data.dateMinute <= 53) {
							return 3.91358;
						}
					}
				}
			}
		} else if (data.dateDayOfMonth <= 13) {
			if (data.platenumber == null) {
				return 3.18542;
			} else if (data.platenumber > 18462640) {
				if (data.dateMonth == null) {
					return 3.22176;
				} else if (data.dateMonth > 3) {
					if (data.platenumber > 75088092) {
						if (data.platenumber > 80471302) {
							if (data.platenumber > 96933685) {
								if (data.dateDayOfMonth > 11) {
									return 4.5;
								} else if (data.dateDayOfMonth <= 11) {
									if (data.platenumber > 97241594) {
										return 2.72917;
									} else if (data.platenumber <= 97241594) {
										return 1.5;
									}
								}
							} else if (data.platenumber <= 96933685) {
								if (data.dateMillisecond == null) {
									return 3.31395;
								} else if (data.dateMillisecond > 107) {
									if (data.dateDayOfMonth > 2) {
										if (data.dateDayOfMonth > 4) {
											if (data.dateMillisecond > 160) {
												if (data.dateDayOfMonth > 5) {
													if (data.dateMonth > 6) {
														return 2.70667;
													} else if (data.dateMonth <= 6) {
														if (data.dateHour == null) {
															return 3.3787;
														} else if (data.dateHour > 19) {
															return 4.28571;
														} else if (data.dateHour <= 19) {
															return 3.19858;
														}
													}
												} else if (data.dateDayOfMonth <= 5) {
													if (data.dateMillisecond > 213) {
														return 4.54545;
													} else if (data.dateMillisecond <= 213) {
														return 2.5;
													}
												}
											} else if (data.dateMillisecond <= 160) {
												return 1.83333;
											}
										} else if (data.dateDayOfMonth <= 4) {
											if (data.vehicletype == null) {
												return 2.09091;
											} else if (data.vehicletype == "PERSONAL") {
												return 1.45455;
											} else if (data.vehicletype != "PERSONAL") {
												return 3.36364;
											}
										}
									} else if (data.dateDayOfMonth <= 2) {
										return 3.84127;
									}
								} else if (data.dateMillisecond <= 107) {
									return 4;
								}
							}
						} else if (data.platenumber <= 80471302) {
							if (data.dateDayOfMonth > 3) {
								return 2.54386;
							} else if (data.dateDayOfMonth <= 3) {
								if (data.dateHour == null) {
									return 3.75;
								} else if (data.dateHour > 13) {
									return 4.375;
								} else if (data.dateHour <= 13) {
									return 2.5;
								}
							}
						}
					} else if (data.platenumber <= 75088092) {
						if (data.dateDayOfMonth > 6) {
							if (data.specialdate == null) {
								return 3.2607;
							} else if (data.specialdate == "false") {
								if (data.dateMonth > 6) {
									if (data.platenumber > 72481840) {
										return 1.71429;
									} else if (data.platenumber <= 72481840) {
										if (data.vehicletype == null) {
											return 3.00935;
										} else if (data.vehicletype == "PERSONAL") {
											return 3.25714;
										} else if (data.vehicletype != "PERSONAL") {
											if (data.dateMillisecond == null) {
												return 2.54054;
											} else if (data.dateMillisecond > 759) {
												if (data.dateMillisecond > 954) {
													return 1.5;
												} else if (data.dateMillisecond <= 954) {
													return 3.58333;
												}
											} else if (data.dateMillisecond <= 759) {
												return 2.08696;
											}
										}
									}
								} else if (data.dateMonth <= 6) {
									if (data.dateMinute == null) {
										return 3.31355;
									} else if (data.dateMinute > 57) {
										if (data.dateMonth > 5) {
											return 4.5;
										} else if (data.dateMonth <= 5) {
											return 1.72222;
										}
									} else if (data.dateMinute <= 57) {
										if (data.dateMillisecond == null) {
											return 3.35118;
										} else if (data.dateMillisecond > 922) {
											if (data.dateMinute > 14) {
												return 3.06383;
											} else if (data.dateMinute <= 14) {
												return 1.55556;
											}
										} else if (data.dateMillisecond <= 922) {
											if (data.dateMillisecond > 571) {
												if (data.dateMinute > 24) {
													return 3.92929;
												} else if (data.dateMinute <= 24) {
													if (data.dateMillisecond > 798) {
														if (data.dateHour == null) {
															return 2.33333;
														} else if (data.dateHour > 9) {
															return 2;
														} else if (data.dateHour <= 9) {
															return 3.8;
														}
													} else if (data.dateMillisecond <= 798) {
														return 3.65;
													}
												}
											} else if (data.dateMillisecond <= 571) {
												if (data.dateMinute > 10) {
													return 3.18827;
												} else if (data.dateMinute <= 10) {
													if (data.dateHour == null) {
														return 3.93878;
													} else if (data.dateHour > 1) {
														return 4.2093;
													} else if (data.dateHour <= 1) {
														return 2;
													}
												}
											}
										}
									}
								}
							} else if (data.specialdate == "true") {
								return 3.6;
							}
						} else if (data.dateDayOfMonth <= 6) {
							if (data.dateMinute == null) {
								return 3.532;
							} else if (data.dateMinute > 33) {
								if (data.dateMillisecond == null) {
									return 3.73064;
								} else if (data.dateMillisecond > 33) {
									if (data.dateHour == null) {
										return 3.80496;
									} else if (data.dateHour > 7) {
										if (data.platenumber > 57821228) {
											return 3.08065;
										} else if (data.platenumber <= 57821228) {
											if (data.dateMillisecond > 745) {
												if (data.platenumber > 54104283) {
													return 5;
												} else if (data.platenumber <= 54104283) {
													if (data.platenumber > 26878348) {
														return 2.14286;
													} else if (data.platenumber <= 26878348) {
														return 4.5;
													}
												}
											} else if (data.dateMillisecond <= 745) {
												return 4.22353;
											}
										}
									} else if (data.dateHour <= 7) {
										if (data.platenumber > 24642416) {
											return 4.29167;
										} else if (data.platenumber <= 24642416) {
											return 2.8;
										}
									}
								} else if (data.dateMillisecond <= 33) {
									if (data.dateDayOfMonth > 2) {
										return 1.92308;
									} else if (data.dateDayOfMonth <= 2) {
										return 5;
									}
								}
							} else if (data.dateMinute <= 33) {
								if (data.dateSecond == null) {
									return 3.40177;
								} else if (data.dateSecond > 57) {
									return 2.47368;
								} else if (data.dateSecond <= 57) {
									if (data.dateMillisecond == null) {
										return 3.4424;
									} else if (data.dateMillisecond > 153) {
										if (data.dateMillisecond > 218) {
											return 3.47514;
										} else if (data.dateMillisecond <= 218) {
											return 4.83333;
										}
									} else if (data.dateMillisecond <= 153) {
										return 2.96667;
									}
								}
							}
						}
					}
				} else if (data.dateMonth <= 3) {
					if (data.dateHour == null) {
						return 3.11676;
					} else if (data.dateHour > 2) {
						if (data.dateHour > 12) {
							if (data.dateMonth > 2) {
								if (data.dateDayOfMonth > 2) {
									if (data.platenumber > 83525675) {
										if (data.dateMillisecond == null) {
											return 3.65217;
										} else if (data.dateMillisecond > 302) {
											return 4.66667;
										} else if (data.dateMillisecond <= 302) {
											return 3;
										}
									} else if (data.platenumber <= 83525675) {
										if (data.dateMillisecond == null) {
											return 2.94898;
										} else if (data.dateMillisecond > 811) {
											return 2.1;
										} else if (data.dateMillisecond <= 811) {
											if (data.dateHour > 15) {
												return 2.87302;
											} else if (data.dateHour <= 15) {
												return 3.48;
											}
										}
									}
								} else if (data.dateDayOfMonth <= 2) {
									return 3.7027;
								}
							} else if (data.dateMonth <= 2) {
								if (data.platenumber > 85898620) {
									return 2.30588;
								} else if (data.platenumber <= 85898620) {
									if (data.dateDayOfMonth > 2) {
										if (data.dateHour > 13) {
											if (data.dateHour > 22) {
												if (data.dateMinute == null) {
													return 2.30435;
												} else if (data.dateMinute > 45) {
													return 4.5;
												} else if (data.dateMinute <= 45) {
													return 1.84211;
												}
											} else if (data.dateHour <= 22) {
												if (data.dateMinute == null) {
													return 3.29225;
												} else if (data.dateMinute > 54) {
													return 2.3;
												} else if (data.dateMinute <= 54) {
													if (data.dateMillisecond == null) {
														return 3.36742;
													} else if (data.dateMillisecond > 316) {
														if (data.dateDayOfMonth > 9) {
															if (data.dateMillisecond > 799) {
																return 3.5;
															} else if (data.dateMillisecond <= 799) {
																return 1.8;
															}
														} else if (data.dateDayOfMonth <= 9) {
															return 3.35075;
														}
													} else if (data.dateMillisecond <= 316) {
														if (data.dateMillisecond > 229) {
															return 4.66667;
														} else if (data.dateMillisecond <= 229) {
															return 3.55814;
														}
													}
												}
											}
										} else if (data.dateHour <= 13) {
											if (data.dateDayOfWeek == null) {
												return 2.57377;
											} else if (data.dateDayOfWeek > 5) {
												return 3.44444;
											} else if (data.dateDayOfWeek <= 5) {
												if (data.dateMinute == null) {
													return 2.2093;
												} else if (data.dateMinute > 51) {
													return 5;
												} else if (data.dateMinute <= 51) {
													return 2.07317;
												}
											}
										}
									} else if (data.dateDayOfMonth <= 2) {
										if (data.platenumber > 35132128) {
											return 2.09836;
										} else if (data.platenumber <= 35132128) {
											if (data.specialdate == null) {
												return 3.47368;
											} else if (data.specialdate == "false") {
												return 4;
											} else if (data.specialdate == "true") {
												return 1.5;
											}
										}
									}
								}
							}
						} else if (data.dateHour <= 12) {
							return 3.3351;
						}
					} else if (data.dateHour <= 2) {
						return 2.81707;
					}
				}
			} else if (data.platenumber <= 18462640) {
				if (data.dateHour == null) {
					return 3.02736;
				} else if (data.dateHour > 0) {
					if (data.vehicletype == null) {
						return 3.00313;
					} else if (data.vehicletype == "TRUCK") {
						return 3.34109;
					} else if (data.vehicletype != "TRUCK") {
						if (data.dateMinute == null) {
							return 2.95054;
						} else if (data.dateMinute > 47) {
							if (data.dateMillisecond == null) {
								return 2.66995;
							} else if (data.dateMillisecond > 538) {
								if (data.dateMinute > 57) {
									return 2.2069;
								} else if (data.dateMinute <= 57) {
									if (data.dateDayOfWeek == null) {
										return 3.44737;
									} else if (data.dateDayOfWeek > 4) {
										if (data.dateMillisecond > 930) {
											return 4.5;
										} else if (data.dateMillisecond <= 930) {
											if (data.dateMinute > 55) {
												return 4.66667;
											} else if (data.dateMinute <= 55) {
												return 2.4375;
											}
										}
									} else if (data.dateDayOfWeek <= 4) {
										return 4;
									}
								}
							} else if (data.dateMillisecond <= 538) {
								if (data.platenumber > 702424) {
									if (data.platenumber > 18118909) {
										return 5;
									} else if (data.platenumber <= 18118909) {
										return 2.04348;
									}
								} else if (data.platenumber <= 702424) {
									return 4.5;
								}
							}
						} else if (data.dateMinute <= 47) {
							if (data.dateMinute > 46) {
								return 4.5;
							} else if (data.dateMinute <= 46) {
								if (data.dateHour > 18) {
									if (data.dateDayOfMonth > 4) {
										if (data.dateMinute > 8) {
											return 2.06579;
										} else if (data.dateMinute <= 8) {
											if (data.dateMillisecond == null) {
												return 3.44444;
											} else if (data.dateMillisecond > 587) {
												return 1.5;
											} else if (data.dateMillisecond <= 587) {
												return 4;
											}
										}
									} else if (data.dateDayOfMonth <= 4) {
										if (data.platenumber > 680933) {
											return 3.93548;
										} else if (data.platenumber <= 680933) {
											return 2;
										}
									}
								} else if (data.dateHour <= 18) {
									if (data.dateMillisecond == null) {
										return 3.10395;
									} else if (data.dateMillisecond > 224) {
										if (data.dateHour > 6) {
											if (data.dateMinute > 29) {
												if (data.platenumber > 14114046) {
													return 4.8;
												} else if (data.platenumber <= 14114046) {
													return 3.52941;
												}
											} else if (data.dateMinute <= 29) {
												return 2.9505;
											}
										} else if (data.dateHour <= 6) {
											if (data.platenumber > 4312536) {
												return 2.34211;
											} else if (data.platenumber <= 4312536) {
												if (data.platenumber > 3615739) {
													return 4.5;
												} else if (data.platenumber <= 3615739) {
													if (data.dateMinute > 28) {
														return 4.66667;
													} else if (data.dateMinute <= 28) {
														return 1.95238;
													}
												}
											}
										}
									} else if (data.dateMillisecond <= 224) {
										return 3.5814;
									}
								}
							}
						}
					}
				} else if (data.dateHour <= 0) {
					return 3.82759;
				}
			}
		}
	}
	return null;
}
