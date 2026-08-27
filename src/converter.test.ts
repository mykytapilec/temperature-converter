import { describe, expect, it } from 'vitest';
import { convertTemperature } from './converter';

describe('convertTemperature', () => {
  it('converts Celsius to Fahrenheit', () => {
    expect(convertTemperature(34, 'celsius', 'fahrenheit')).toBeCloseTo(93.2);
  });

  it('converts Fahrenheit to Celsius', () => {
    expect(convertTemperature(32, 'fahrenheit', 'celsius')).toBeCloseTo(0);
  });

  it('converts Celsius to Kelvin', () => {
    expect(convertTemperature(0, 'celsius', 'kelvin')).toBeCloseTo(273.15);
  });

  it('converts Kelvin to Celsius', () => {
    expect(convertTemperature(273.15, 'kelvin', 'celsius')).toBeCloseTo(0);
  });

  it('converts Fahrenheit to Kelvin', () => {
    expect(convertTemperature(32, 'fahrenheit', 'kelvin')).toBeCloseTo(273.15);
  });

  it('converts Kelvin to Fahrenheit', () => {
    expect(convertTemperature(273.15, 'kelvin', 'fahrenheit')).toBeCloseTo(32);
  });

  it('returns the original value when units are the same', () => {
    expect(convertTemperature(100, 'celsius', 'celsius')).toBe(100);
    expect(convertTemperature(50, 'fahrenheit', 'fahrenheit')).toBe(50);
    expect(convertTemperature(273.15, 'kelvin', 'kelvin')).toBe(273.15);
  });

  it('handles negative temperatures', () => {
    expect(convertTemperature(-40, 'celsius', 'fahrenheit')).toBeCloseTo(-40);
    expect(convertTemperature(-40, 'fahrenheit', 'celsius')).toBeCloseTo(-40);
  });

  it('handles decimal temperatures', () => {
    expect(convertTemperature(36.6, 'celsius', 'fahrenheit')).toBeCloseTo(
      97.88,
    );
  });
});